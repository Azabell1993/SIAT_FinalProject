package com.siat.blueclub.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.siat.blueclub.domain.Age;
import com.siat.blueclub.domain.Color;
import com.siat.blueclub.domain.Gender;
import com.siat.blueclub.domain.Material;
import com.siat.blueclub.domain.Member;
import com.siat.blueclub.domain.PriceRange;
import com.siat.blueclub.domain.ProAddVO;
import com.siat.blueclub.domain.ProCategory;
import com.siat.blueclub.domain.ProImage;
import com.siat.blueclub.domain.Product;
import com.siat.blueclub.domain.ProductVO;
import com.siat.blueclub.domain.Season;
import com.siat.blueclub.domain.WatchedProduct;
import com.siat.blueclub.persistence.AgeRepository;
import com.siat.blueclub.persistence.ColorRepository;
import com.siat.blueclub.persistence.GenderRepository;
import com.siat.blueclub.persistence.ImageRepository;
import com.siat.blueclub.persistence.MaterialRepository;
import com.siat.blueclub.persistence.MemberRepository;
import com.siat.blueclub.persistence.PriceRangeRepository;
import com.siat.blueclub.persistence.ProCategoryRepository;
import com.siat.blueclub.persistence.ProductDao;
import com.siat.blueclub.persistence.ProductRepository;
import com.siat.blueclub.persistence.SeasonRepository;
import com.siat.blueclub.persistence.WatchedProductRepositroy;

@Service
public class ProServiceImpl implements ProService {

	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private ProCategoryRepository proCategoryRepository;
	@Autowired
	private AgeRepository ageRepository;
	@Autowired
	private ColorRepository colorRepository;
	@Autowired
	private GenderRepository genderRepository;
	@Autowired
	private MaterialRepository materialRepository;
	@Autowired
	private PriceRangeRepository priceRangeRepository;
	@Autowired
	private SeasonRepository seasonRepository;

	@Autowired
	private ProductDao productDao;
	@Autowired
	private CategoryService categoryService;

	@Autowired
	private ImageRepository imageRepository;

	@Autowired
	private MemberRepository memberRepository;
	@Autowired
	private WatchedProductRepositroy watchedProductRepositroy;

	@Override
	public List<Long> getRecommend(Member memID) {
		// 상품 리스트 -> 매게변수는 사용자가 이전에 조회한 상품의 코드 목록
		// 코드 목록이 비어있으면 이름순, 비어있지 않으면 추천 순으로 상품 리스트 전송
		Optional<Member> optional = memberRepository.findById(memID.getMemID());
		List<Long> recommend = new ArrayList<>(); // 상품 리스트

		if (optional.isEmpty()) {
			for (Product i : (List<Product>) productRepository.findAllByOrderByProNameAsc()) { // 상품 이름 순으로 모든 데이터를
				recommend.add(i.getProCode()); // 상품 리스트에 저장
			}
		} else {
			List<WatchedProduct> proCodeList = (List<WatchedProduct>) watchedProductRepositroy.findAllByMemID(memID);
			if (proCodeList.size() == 0) { // 코드 목록이 비어있을 경우
				for (Product i : (List<Product>) productRepository.findAllByOrderByProNameAsc()) { // 상품 이름 순으로 모든 데이터를
					recommend.add(i.getProCode()); // 상품 리스트에 저장
				}
			} else { // 코드 목록이 비어있지 않을 경우
				double aver[] = averStatusArray(proCodeList); // 사용자가 조회한 상품 스테이터스의 평균
				Map<Long, Double> siilarityMap = new HashMap<>(); // 코사인 유사도 맵 -> {상품 코드 : 코사인 유사도} 형식
				List<Product> allProducts = (List<Product>) productRepository.findAll(); // 전체 상품 목록
				for (Product i : allProducts) { // 전체 상품 목록 조회
					// 사용자가 조회한 상품 스테이터스의 평균과 전체 상품 스테이터스의 코사인 유사도 계산
					siilarityMap.put(i.getProCode(), cosineSimilarity(aver, statusArray(i))); // 코사인 유사도 맵에 저장
				}
				// 코사인 유사도가 높은 순으로 코사인 유사도 맵 정렬
				List<Entry<Long, Double>> entryList = new ArrayList<Entry<Long, Double>>(siilarityMap.entrySet());
				Collections.sort(entryList, new Comparator<Entry<Long, Double>>() {
					public int compare(Entry<Long, Double> obj1, Entry<Long, Double> obj2) {
						return obj2.getValue().compareTo(obj1.getValue());
					}
				});
				for (Entry<Long, Double> entry : entryList) {
					recommend.add(entry.getKey()); // 상품 리스트에 저장
				}

			}
		}

		return recommend; // 상품 리스트 return

	}

	@Override
	public List<Long> getRecommendByCategory(String memID, String categoryLargeName, String categorySmallName) {
		// 카테고리 별 상품 리스트 -> MyBatis 사용
		// 카테고리 이름이 대분류면 범위 지정, 카테고리 이름이 소분류면 단독으로 탐색
		// 코드 목록이 비어있으면 이름순, 코드 목록이 비어있지 않으면 추천순으로 상품 목록을 전송
		Optional<Member> optional = memberRepository.findById(memID);
		List<Long> recommend = new ArrayList<>(); // 상품 리스트

		if (optional.isEmpty()) {
			if (categorySmallName.equals("none")) { // 카테고리 이름이 대분류일 경우 -> 범위 탐색
				int start = categoryService.getCategoryRagneStart(categoryLargeName); // 카테고리 대분류 범위 시작 찾기
				int end = categoryService.getCategoryRagneEnd(categoryLargeName); // 카테고리 대분류 범위 끝 찾기
				for (ProductVO i : productDao.getProductsByCategoryCodeRange(start, end)) { // 대분류 범위 내의 상품(이름순)
					recommend.add(i.getPro_Code()); // 상품 리스트에 저장
				}
			} else { // 카테고리 이름이 소분류 일 경우 -> 단일 탐색
				for (ProductVO i : productDao.getProductsByCategoryNames(categoryLargeName, categorySmallName)) { // 소분류에
																													// 해당하는
																													// 상품(이름순)
					recommend.add(i.getPro_Code()); // 상품 리스트에 저장
				}
			}
		} else {
			List<WatchedProduct> proCodeList = (List<WatchedProduct>) watchedProductRepositroy.findAllByMemID(optional.get());
			if (proCodeList.size() == 0) { // 코드 목록이 비어있을 경우
				if (categorySmallName.equals("none")) { // 카테고리 이름이 대분류일 경우 -> 범위 탐색
					int start = categoryService.getCategoryRagneStart(categoryLargeName); // 카테고리 대분류 범위 시작 찾기
					int end = categoryService.getCategoryRagneEnd(categoryLargeName); // 카테고리 대분류 범위 끝 찾기
					for (ProductVO i : productDao.getProductsByCategoryCodeRange(start, end)) { // 대분류 범위 내의 상품(이름순)
						recommend.add(i.getPro_Code()); // 상품 리스트에 저장
					}
				} else { // 카테고리 이름이 소분류 일 경우 -> 단일 탐색
					for (ProductVO i : productDao.getProductsByCategoryNames(categoryLargeName, categorySmallName)) { // 소분류에
																														// 해당하는
																														// 상품(이름순)
						recommend.add(i.getPro_Code()); // 상품 리스트에 저장
					}
				}
			} else { // 코드 목록이 비어있지 않을 경우
				double aver[] = averStatusArray(proCodeList); // 사용자가 조회한 상품 스테이터스의 평균
				Map<Long, Double> siilarityMap = new HashMap<>(); // 코사인 유사도 맵 -> {상품 코드 : 코사인 유사도} 형식
				if (categorySmallName.equals("none")) { // 카테고리 이름이 대분류일 경우 -> 범위 탐색
					int start = categoryService.getCategoryRagneStart(categoryLargeName); // 카테고리 대분류 범위 시작 찾기
					int end = categoryService.getCategoryRagneEnd(categoryLargeName); // 카테고리 대분류 범위 끝 찾기

					List<ProductVO> allProductsinCategory = productDao.getProductsByCategoryCodeRange(start, end);// 대분류 범위
																													// 내 상품
																													// 상품 목록
					for (ProductVO i : allProductsinCategory) { // 전체 상품 목록 조회
						// 사용자가 조회한 상품 스테이터스의 평균과 전체 상품 스테이터스의 코사인 유사도 계산
						siilarityMap.put(i.getPro_Code(), cosineSimilarity(aver, statusArrayForVO(i))); // 코사인 유사도 맵에 저장
					}
				} else { // 카테고리 이름이 소분류 일 경우 -> 단일 탐색
					List<ProductVO> allProductsinCategory = productDao.getProductsByCategoryNames(categoryLargeName,
							categorySmallName); // 소분류에 해당하는
					// 상품(이름순);
					for (ProductVO i : allProductsinCategory) { // 전체 상품 목록 조회
						// 사용자가 조회한 상품 스테이터스의 평균과 전체 상품 스테이터스의 코사인 유사도 계산
						siilarityMap.put(i.getPro_Code(), cosineSimilarity(aver, statusArrayForVO(i))); // 코사인 유사도 맵에 저장
					}
				}
				// 코사인 유사도가 높은 순으로 코사인 유사도 맵 정렬
				List<Entry<Long, Double>> entryList = new ArrayList<Entry<Long, Double>>(siilarityMap.entrySet());
				Collections.sort(entryList, new Comparator<Entry<Long, Double>>() {
					public int compare(Entry<Long, Double> obj1, Entry<Long, Double> obj2) {
						return obj2.getValue().compareTo(obj1.getValue());
					}
				});
				for (Entry<Long, Double> entry : entryList) {
					recommend.add(entry.getKey()); // 상품 리스트에 저장
				}

			}
		}
		
		return recommend; // 상품 리스트 return
	}

	@Override
	public Product getProInfo(Long proCode) { // 상품 코드를 기반으로 한 상품 정보 조회
		return productRepository.findById(proCode).get();
	}

	@Override
	public boolean proAdd(ProAddVO vo) { // 상품 등록
		Product product = new Product();
		// vo객체의 데이터를 통해 Product 객체 데이터 set
		product.setProAge(ageRepository.findByAgeName(vo.getAgeName()).get());
		product.setProCategory(proCategoryRepository
				.findByCategoryLargeNameAndCategorySmallName(vo.getCategoryLargeName(), vo.getCategorySmallName())
				.get());
		product.setProColor(colorRepository.findByColorName(vo.getColorName()).get());
		product.setProCount(0);
		product.setProDetail(vo.getProDetail());
		product.setProGender(genderRepository.findByGenderName(vo.getGenderName()).get());
		product.setProMaterial(materialRepository.findByMaterialName(vo.getMaterialName()).get());
		product.setProName(vo.getProName());
		product.setProPrice(vo.getProPrice());
		product.setProPriceRange(priceRangeRepository.findByPriceRangeName(vo.getPriceRangeName()).get());
		product.setProSeason(seasonRepository.findBySeasonName(vo.getSeasonName()).get());
		product.setProStock(vo.getProStock());

		productRepository.save(product); // DB에 상품 저장
		if (productRepository.findById(product.getProCode()).isEmpty()) { // 상품이 정상적으로 등록되지 않았을 경우
			return false;
		} else { // 상품이 정상적으로 등록 되었을 경우
			return true;
		}

	}

	@Override
	public boolean proView(Long proID, String memID) { // 상품 조회 -> 조회수 증가
		Optional<Member> optional = memberRepository.findById(memID);
		if (StringUtils.isEmpty(memID)) {
			Product product = productRepository.findById(proID).get();
			int count = product.getProCount() + 1;
			product.setProCount(count);
			productRepository.save(product);
			return false;
		} else {
			Product product = productRepository.findById(proID).get();
			Member member = optional.get();
			int count = product.getProCount() + 1;
			product.setProCount(count);
			productRepository.save(product);
			WatchedProduct watchedProduct = new WatchedProduct();
			watchedProduct.setMemID(member);
			watchedProduct.setProCode(product);
			watchedProductRepositroy.save(watchedProduct);
			return true;
		}
	}

	@Override
	public boolean imageUpload(String proName, MultipartFile[] proImage) { // 이미지 업로드
		String path = "D:\\study\\blueclub\\src\\main\\resources\\images";
		List<ProImage> list = new ArrayList<>();
		int check = 0;

		for (MultipartFile file : proImage) {
			if (!file.isEmpty()) {
				Optional<Product> optional = productRepository.findByProName(proName);
				if (!optional.isEmpty()) {

				}
				Product product = optional.get();
				ProImage image = new ProImage();
				image.setImageID(UUID.randomUUID().toString());
				image.setOriginName(file.getOriginalFilename());
				image.setContentType(file.getContentType());
				image.setSavaPath(path);
				image.setSaveName(image.getImageID() + "_" + image.getOriginName());
				image.setProName(product);

				list.add(image);

				File newFile = new File(path, image.getSaveName());
				try {
					file.transferTo(newFile);
					imageRepository.save(image);
					check++;
				} catch (IllegalStateException | IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		if (check == proImage.length)

		{
			return true;
		} else {
			return false;
		}
	}

	@Override
	public ResponseEntity<Resource> imageLoad(Product proName) throws NotFoundException {
		// 이미지 전송
		try {
			Optional<Product> optional = productRepository.findByProName(proName.getProName());
			if (optional.isEmpty()) {
				return null;
			} else {
				Product product = optional.get();
				ProImage image = imageRepository.findByProName(product).get();
				System.out.println(image.toString());
				FileSystemResource resource = new FileSystemResource(image.getSavaPath() + "/" + image.getSaveName());
				if (!resource.exists()) {
					throw new NotFoundException();
				}

				System.out.println(resource);
				HttpHeaders header = new HttpHeaders();
				Path filePath = null;
				filePath = Paths.get(image.getSavaPath() + "/" + image.getSaveName());
				header.add("Content-Type", Files.probeContentType(filePath));
				return new ResponseEntity<Resource>(resource, header, HttpStatus.OK);

			}

		} catch (Exception e) {
			FileSystemResource resource = new FileSystemResource("D:\\study\\blueclub\\src\\main\\resources\\images/noImage.png");
			if (!resource.exists()) {
				throw new NotFoundException();
			}

			System.out.println(resource);
			HttpHeaders header = new HttpHeaders();
			Path filePath = null;
			filePath = Paths.get("D:\\study\\blueclub\\src\\main\\resources\\images/noImage.png");
			try {
				header.add("Content-Type", Files.probeContentType(filePath));
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			return new ResponseEntity<Resource>(resource, header, HttpStatus.OK);
		}
	}

	@Override
	public List<Age> ageInfo() { // age 테이블 정보
		return (List<Age>) ageRepository.findAll();
	}

	@Override
	public List<Color> colorInfo() { // color 테이블 정보
		return (List<Color>) colorRepository.findAll();
	}

	@Override
	public List<Gender> genderInfo() { // gender 테이블 정보
		return (List<Gender>) genderRepository.findAll();
	}

	@Override
	public List<Material> materialInfo() { // material 테이블 정보
		return (List<Material>) materialRepository.findAll();
	}

	@Override
	public List<PriceRange> priceRangeInfo() { // priceRange 테이블 정보
		return (List<PriceRange>) priceRangeRepository.findAll();
	}

	@Override
	public List<Season> seasonInfo() { // season 테이블 정보
		return (List<Season>) seasonRepository.findAll();
	}

	public double[] averStatusArray(List<WatchedProduct> proCodeList) { // 사용자가 조회한 상품의 스테이터스 평균 배열 생성
		double age = 0.0;
		double color = 0.0;
		double gender = 0.0;
		double material = 0.0;
		double priceRange = 0.0;
		double season = 0.0;
		double category = 0.0;

		double count = 0.0;

		for (WatchedProduct i : proCodeList) { // 사용자가 조회한 상품 코드 리스트 조회
			Long j = i.getProCode().getProCode();
			Product proTemp = productRepository.findById(j).get(); // 상품 코드를 통해 상품 데이터를 받아옴
			age += proTemp.getProAge().getAgeCode();
			color += proTemp.getProColor().getColorCode();
			gender += proTemp.getProGender().getGenderCode();
			material += proTemp.getProMaterial().getMaterialCode();
			priceRange += proTemp.getProPriceRange().getPriceRangeCode();
			season += proTemp.getProSeason().getSeasonCode();
			category += proTemp.getProCategory().getCategoryCode();

			count++;

		}
		double[] aver = { age / count, color / count, gender / count, material / count, priceRange / count,
				season / count, category / count }; // 스테이터스 평균값 저장

		return aver;
	}

	public double[] statusArray(Product proTemp) { // 상품의 스테이터스 배열 생성
		double age;
		double color;
		double gender;
		double material;
		double priceRange;
		double season;
		double category;

		age = proTemp.getProAge().getAgeCode();
		color = proTemp.getProColor().getColorCode();
		gender = proTemp.getProGender().getGenderCode();
		material = proTemp.getProMaterial().getMaterialCode();
		priceRange = proTemp.getProPriceRange().getPriceRangeCode();
		season = proTemp.getProSeason().getSeasonCode();
		category = proTemp.getProCategory().getCategoryCode();

		double[] aver = { age, color, gender, material, priceRange, season, category };

		return aver;
	}

	public double[] statusArrayForVO(ProductVO proTemp) { // 상품의 스테이터스 배열 생성 (ProductVO 용)
		double age;
		double color;
		double gender;
		double material;
		double priceRange;
		double season;
		double category;

		age = proTemp.getAge_Code();
		color = proTemp.getColor_Code();
		gender = proTemp.getGender_Code();
		material = proTemp.getMaterial_Code();
		priceRange = proTemp.getPrice_Range_Code();
		season = proTemp.getSeason_Code();
		category = proTemp.getCategory_Code();

		double[] aver = { age, color, gender, material, priceRange, season, category };

		return aver;
	}

	public static double cosineSimilarity(double[] vectorA, double[] vectorB) { // vectorA와 vectorB 사이의 코사인 유사도
		double dotProduct = 0.0;
		double normA = 0.0;
		double normB = 0.0;
		for (int i = 0; i < vectorA.length; i++) {
			dotProduct += vectorA[i] * vectorB[i];
			normA += Math.pow(vectorA[i], 2);
			normB += Math.pow(vectorB[i], 2);
		}
		return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
	}

}
