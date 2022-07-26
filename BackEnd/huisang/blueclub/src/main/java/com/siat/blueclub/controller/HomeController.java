package com.siat.blueclub.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.siat.blueclub.domain.Member;
import com.siat.blueclub.domain.Product;
import com.siat.blueclub.domain.ProAddVO;
import com.siat.blueclub.domain.Role;
import com.siat.blueclub.service.MemService;
import com.siat.blueclub.service.ProService;
import com.siat.blueclub.service.CategoryService;

@Controller
public class HomeController {
	
	@Autowired
	private MemService memService;
	@Autowired
	private CategoryService categoryService;
	@Autowired
	private ProService proService;
	
	
	@CrossOrigin
	@GetMapping("test")
	@ResponseBody
	public Map<String, Object> test() { //연결 테스트용 메소드 추후 삭제 예정
		System.out.println("test check");
		Map<String, Object> data = new HashMap<>();
		data.put("data", "이 텍스트가 보내지나요?");
		return data;
	}
	@CrossOrigin
	@GetMapping("jsonTest")
	@ResponseBody
	public Member jsonTest() { //연결 테스트용 메소드 추후 삭제 예정
		Member test = new Member();
		test.setMemID("test");
		test.setMemPW("1234");
		test.setMemRole(new Role(1, "user"));
		System.out.println("jsonTest check");
		return test;
	}
	@CrossOrigin
	@PostMapping("loginProc")
	@ResponseBody
	public Map<String, Object> loginProc(@RequestBody Member mem) { //로그인용 메소드
		Map<String, Object> data = new HashMap<>();
		System.out.println(mem.toString());
		if( memService.loginCheck(mem) ) { //로그인 서비스 호출
			System.out.println(mem + " 로그인");
			data.put("data", "true"); //로그인 성공 시 true 전송
			data.put("mem", memService.getMem(mem)); //로그인 성공시 멤버 정보 전송
		} else { 
			data.put("data", "false"); //로그인 실패 시 false 전송
			data.put("mem", null); //로그인 실패 시 멤버 정보 전송하지 않음
			}
		return data;
	}	
	@CrossOrigin
	@PostMapping("idCheckProc")
	@ResponseBody
	public Map<String, Object> idCheckProc(@RequestBody Member mem) { //아이디 중복체크 메소드
		Map<String, Object> data = new HashMap<>();
		System.out.println(mem.toString());
		if (memService.idCheck(mem)) { //아이디 중복 체크 서비스 호출 -> 해당하는 아이디가 있을 시
			data.put("data", "true"); //true 전송
		} else { //해당하는 아이디가 없을 시
			data.put("data", "false"); //false 전송
		}
		return data;
	}
	@CrossOrigin
	@PostMapping("signUpProc")
	@ResponseBody
	public Map<String, Object> signUpProc(@RequestBody Member mem) { //회원가입 메소드
		Map<String, Object> data = new HashMap<>();
		if(memService.signUp(mem)) { //회원가입 서비스 호출 -> 회원가입 성공 시
			data.put("data", "true"); //true 전송
		} else { //회원가입 실패 시
			data.put("data", "false"); //false 전송
		}
		
		return data;
	}
	@CrossOrigin
	@PostMapping("categoryData")
	@ResponseBody
	public Map<String, Object> categoryData() { //카테고리 정보 메소드
		Map<String, Object> categoryMap = categoryService.getCategoryMap(); //카테고리 정보 서비스 호출 -> {대분류 : [소분류]} 형식
		
		return categoryMap;
	}
	@CrossOrigin
	@PostMapping("ProList")
	@ResponseBody
	public Map<String, Object> ProList(@RequestBody Map<String, Object> proList) { 
		//상품 리스트 메소드 -> 매게변수는 사용자가 이전에 조회한 상품의 코드 목록 
		//-> 코드 목록이 비어있으면 이름순, 비어있지 않으면 추천 순으로 상품 리스트 전송
		Map<String, Object> data = new HashMap<>();
		List<Integer> proCodeList = (List<Integer>) proList.get("proList"); //매게변수 Map에서 상품 코드 데이터만 추출 
		List<Long> recommendList = new ArrayList<>(); //상품 리스트
		recommendList =  proService.getRecommend(proCodeList); //상품 리스트 서비스 호출
		
		data.put("data", recommendList);

		return data;
	}
	@CrossOrigin
	@PostMapping("ProInfo")
	@ResponseBody
	public Map<String, Object> ProInfo(@RequestBody Product product) { //상품 코드를 기반으로 한 상품 정보 조회
		Map<String, Object> data = new HashMap<>();
		System.out.println(product.toString());
		Product result = proService.getProInfo(product.getProCode()); ////상품 코드를 기반으로 한 상품 정보 조회 서비스 호출
		
		
		data.put("data", result);
		
		return data;
	}
	@CrossOrigin
	@PostMapping("ProAdd")
	@ResponseBody
	public Map<String, Object> ProAdd(@RequestBody ProAddVO product) { 
		//상품 등록
		//Product Entity 클래스는 Join 때문에 클래스 타입의 필드가 많음
		//-> 클래스 타입의 필드를 서비스에서 조회하고 set하기 위한 이름만을 필요로 하는 임의의 VO객체를 매게변수로 요청
		Map<String, Object> data = new HashMap<>();
		if (proService.proAdd(product)) { //상품등록 서비스 호출
			data.put("data", "true"); //상품 등록 성공 시 true 전송
		} else {
			data.put("data", "false"); //상품 등록 실패 시 false 전송
		}
			
		return data;
	}
	
	

}
