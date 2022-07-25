package com.siat.blueclub.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siat.blueclub.domain.Product;
import com.siat.blueclub.persistence.AgeRepository;
import com.siat.blueclub.persistence.ColorRepository;
import com.siat.blueclub.persistence.GenderRepository;
import com.siat.blueclub.persistence.MaterialRepository;
import com.siat.blueclub.persistence.PriceRangeRepository;
import com.siat.blueclub.persistence.ProCategoryRepository;
import com.siat.blueclub.persistence.ProductRepository;
import com.siat.blueclub.persistence.SeasonRepository;

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

	@Override
	public List<Long> getRecommend(List<Integer> proCodeList) { 
		//상품 리스트 -> 매게변수는 사용자가 이전에 조회한 상품의 코드 목록
		//코드 목록이 비어있으면 이름순, 비어있지 않으면 추천 순으로 상품 리스트 전송
		List<Long> recommend = new ArrayList<>(); //상품 리스트
		if (proCodeList.size() == 0) { //코드 목록이 비어있을 경우
			for(Product i : (List<Product>) productRepository.findAllByOrderByProNameAsc()) { //상품 이름 순으로 모든 데이터를
				recommend.add(i.getProCode()); //상품리스트에 저장
			}
		} else { //코드 목록이 비어있지 않을 경우
			double aver[] = averStatusArray(proCodeList); //사용자가 조회한 상품 스테이터스의 평균
			Map<Long, Double> siilarityMap = new HashMap<>(); //코사인 유사도 맵 -> {상품 코드 : 코사인 유사도} 형식
			List<Product> allProducts = (List<Product>) productRepository.findAll(); //전체 상품 목록
			for(Product i : allProducts) { //전체 상품 목록 조회
				//사용자가 조회한 상품 스테이터스의 평균과 전체 상품 스테이터스의 코사인 유사도 계산
				siilarityMap.put(i.getProCode(), cosineSimilarity(aver, statusArray(i))); //코사인 유사도 맵에 저장
			}
			//코사인 유사도가 높은 순으로 코사인 유사도 맵 정렬
			List<Entry<Long, Double>> entryList = new ArrayList<Entry<Long, Double>>(siilarityMap.entrySet());
			Collections.sort(entryList, new Comparator<Entry<Long, Double>>() {
				public int compare(Entry<Long, Double> obj1, Entry<Long, Double> obj2) {
					return obj2.getValue().compareTo(obj1.getValue());
				}
			});
			for(Entry<Long, Double> entry : entryList) {
				recommend.add(entry.getKey()); //상품 리스트에 상품 코드만 저장
			}

		}
		return recommend; //상품 리스트 return

	}
	
	@Override
	public Product getProInfo(Long proCode) { //상품 코드를 기반으로 한 상품 정보 조회
		return productRepository.findById(proCode).get();
	}

	
	public double[] statusArray(Product proTemp) { //상품의 스테이터스 배열 생성 메소드
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

	public double[] averStatusArray(List<Integer> proCodeList) { //사용자가 조회한 상품의 스테이터스 평균 배열 생성 메소드
		double age = 0.0;
		double color = 0.0;
		double gender = 0.0;
		double material = 0.0;
		double priceRange = 0.0;
		double season = 0.0;
		double category = 0.0;

		double count = 0.0;

		for (Integer i : proCodeList) { //사용자가 조회한 상품 코드 리스트 조회
			Long j = new Long(i);
			Product proTemp = productRepository.findById(j).get(); //상품 코드를 통해 상품 데이터를 받아옴
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
				season / count, category / count }; //스테이터스 평균값 저장

		return aver;
	}
	public static double cosineSimilarity(double[] vectorA, double[] vectorB) { //vectorA와 vectorB 사이의 코사인 유사도를 구하는 메소드
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
