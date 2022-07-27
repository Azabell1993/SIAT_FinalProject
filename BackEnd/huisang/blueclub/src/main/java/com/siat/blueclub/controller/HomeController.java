package com.siat.blueclub.controller;

import java.util.HashMap;
import java.util.Map;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.ResponseBody;

import com.siat.blueclub.domain.Member;

import com.siat.blueclub.domain.Role;

@Controller
public class HomeController {
	
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
}
