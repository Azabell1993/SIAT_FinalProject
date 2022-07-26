package com.siat.blueclub.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.siat.blueclub.domain.Member;
import com.siat.blueclub.service.MemService;

@Controller
@RequestMapping("/mem")
public class MemberController {
	
	@Autowired
	private MemService memService;

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
}
