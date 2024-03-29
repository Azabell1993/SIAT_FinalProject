package com.siat.blueclub.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.siat.blueclub.domain.Age;
import com.siat.blueclub.domain.Color;
import com.siat.blueclub.domain.Gender;
import com.siat.blueclub.domain.Material;
import com.siat.blueclub.domain.Member;
import com.siat.blueclub.domain.PriceRange;
import com.siat.blueclub.domain.ProAddVO;
import com.siat.blueclub.domain.ProImage;
import com.siat.blueclub.domain.Product;
import com.siat.blueclub.domain.Season;
import com.siat.blueclub.service.CategoryService;
import com.siat.blueclub.service.ProService;

@Controller
@RequestMapping("/pro")
public class ProductController {

	@Autowired
	private CategoryService categoryService;
	@Autowired
	private ProService proService;

	@CrossOrigin
	@PostMapping("categoryData")
	@ResponseBody
	public Map<String, Object> categoryData(HttpServletRequest req) { // 카테고리 정보
		Map<String, Object> categoryMap = categoryService.getCategoryMap(); // 카테고리 정보 서비스 호출 -> {대분류 : [소분류]} 형식
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | categoryData");
		return categoryMap;
	}

	@CrossOrigin
	@PostMapping("proList")
	@ResponseBody
	public Map<String, Object> proList(@RequestBody Member mem, HttpServletRequest req) {
		// 상품 리스트 -> 매게변수는 사용자가 이전에 조회한 상품의 코드 목록
		// -> 코드 목록이 비어있으면 이름순, 비어있지 않으면 추천 순으로 상품 리스트 전송
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | proList | " + mem.getMemID());

		List<Long> recommendList = new ArrayList<>(); // 상품 리스트
		recommendList = proService.getRecommend(mem); // 상품 리스트 서비스 호출
		System.out.println(recommendList);
		data.put("data", recommendList);

		return data;
	}

	@CrossOrigin
	@PostMapping("proListByCategory")
	@ResponseBody
	public Map<String, Object> proListByCategory(@RequestBody Map<String, Object> proListandCategory,
			HttpServletRequest req) { // 카테고리 별 상품 리스트
		// 매개변수로 사용자가 이전에 조회한 상품 목록과 카테고리 이름을 가지는 Map객체를 요청
		// 카테고리 이름이 대분류면 범위 지정, 카테고리 이름이 소분류면 단독으로 탐색
		// 코드 목록이 비어있으면 이름순, 코드 목록이 비어있지 않으면 추천순으로 상품 코드 목록을 전송
		Map<String, Object> data = new HashMap<>();
		String memID = (String) proListandCategory.get("memID");
		String categoryLargeName = (String) proListandCategory.get("categoryLargeName");
		String categorySmallName = (String) proListandCategory.get("categorySmallName");
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | proListByCategory | " + memID + " | " + categoryLargeName + " | " + categorySmallName);
		List<Long> recommandlist = proService.getRecommendByCategory(memID, categoryLargeName, categorySmallName);
		System.out.println(recommandlist);
		data.put("data", recommandlist);

		return data;
	}

	@CrossOrigin
	@PostMapping("proInfo")
	@ResponseBody
	public Map<String, Object> proInfo(@RequestBody Product product, HttpServletRequest req) { // 상품 코드를 기반으로 한 상품 정보 조회
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | proInfo | " + product.toString() );
		Product result = proService.getProInfo(product.getProCode()); //// 상품 코드를 기반으로 한 상품 정보 조회 서비스 호출
		data.put("data", result);

		return data;
	}
	@CrossOrigin
	@PostMapping("imageLoad")
	@ResponseBody
	public ResponseEntity<Resource> imageLoad(@RequestBody Product proName,  HttpServletRequest req)
			throws NotFoundException { //이미지 전송
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | imageLoad | " + proName);
		ResponseEntity<Resource> entity = proService.imageLoad(proName);
		
		return entity;
	}

	@CrossOrigin
	@PostMapping("proAdd")
	@ResponseBody
	public Map<String, Object> proAdd(@RequestBody ProAddVO product, HttpServletRequest req) {
		// 상품 등록
		// Product Entity 클래스는 Join 때문에 클래스 타입의 필드가 많음
		// -> 클래스 타입의 필드를 서비스에서 조회하고 set하기 위한 이름만을 필요로 하는 임의의 VO객체를 매게변수로 요청
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | proAdd | " + product.toString());
		Map<String, Object> data = new HashMap<>();
		if (proService.proAdd(product)) { // 상품등록 서비스 호출
			data.put("data", "true"); // 상품 등록 성공 시 true 전송
		} else {
			data.put("data", "false"); // 상품 등록 실패 시 false 전송
		}

		return data;
	}
	@CrossOrigin
	@PostMapping(value = "imageUpload",  consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
	@ResponseBody
	public Map<String, Object> iamgeUpload(@RequestParam String proName, MultipartFile[] proImage, HttpServletRequest req) {
		//이미지 업로드 
		//이미지 파일 path 경로에 저장, 저장 경로 및 이름 DB에 입력
		String path = "D:\\study\\blueclub\\src\\main\\resources\\images";
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | imageUpload | " + proName + " |" + proImage);
		Map<String, Object> data = new HashMap<>();
		if( proService.imageUpload(proName, proImage)) {
			data.put("data", "true");
		}else {
			data.put("data", "false");
		}

		return data;
	}

	@CrossOrigin
	@PostMapping("proView")
	@ResponseBody
	public Map<String, Object> proView(@RequestBody Map<String, Object> viewData, HttpServletRequest req) {
		// 상품 조회 -> 조회수 증가
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | proView");
		Integer proCodeTemp = (Integer) viewData.get("proCode");
		Long proCode = new Long(proCodeTemp);
		String memID = (String) viewData.get("memID");
		if (proService.proView(proCode, memID)) {
			data.put("data", proCodeTemp);
		} else {
			data.put("data", proCodeTemp);
		}

		return data;
	}

	@CrossOrigin
	@PostMapping("ageInfo")
	@ResponseBody
	public Map<String, Object> ageInfo(HttpServletRequest req) { // age 테이블 정보
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | ageInfo");
		List<Age> list = proService.ageInfo();
		data.put("data", list);
		return data;
	}

	@CrossOrigin
	@PostMapping("colorInfo")
	@ResponseBody
	public Map<String, Object> colorInfo(HttpServletRequest req) { // color 테이블 정보
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | colorInfo");
		List<Color> list = proService.colorInfo();
		data.put("data", list);
		return data;
	}

	@CrossOrigin
	@PostMapping("genderInfo")
	@ResponseBody
	public Map<String, Object> genderInfo(HttpServletRequest req) { // gender 테이블 정보
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | genderInfo");
		List<Gender> list = proService.genderInfo();
		data.put("data", list);
		return data;
	}

	@CrossOrigin
	@PostMapping("materialInfo")
	@ResponseBody
	public Map<String, Object> materialInfo(HttpServletRequest req) { // material 테이블 정보
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | materialInfo");
		List<Material> list = proService.materialInfo();
		data.put("data", list);
		return data;
	}

	@CrossOrigin
	@PostMapping("priceRangeInfo")
	@ResponseBody
	public Map<String, Object> priceRangeInfo(HttpServletRequest req) { // priceRange 테이블 정보
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | priceRangeInfo");
		List<PriceRange> list = proService.priceRangeInfo();
		data.put("data", list);
		return data;
	}

	@CrossOrigin
	@PostMapping("seasonInfo")
	@ResponseBody
	public Map<String, Object> seasonInfo(HttpServletRequest req) { // season 테이블 정보
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | seasonInfo");
		List<Season> list = proService.seasonInfo();
		data.put("data", list);
		return data;
	}
	@CrossOrigin
	@PostMapping("deleteProduct")
	@ResponseBody
	public Map<String, Object> deleteProduct(@RequestBody Product proName, HttpServletRequest req) { // season 테이블 정보
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | deleteProduct");
		if( proService.deleteProduct(proName.getProName())) {
			data.put("data", "true");
		}
		else {
			data.put("data", "false");
		}
		return data;
	}
	
}
