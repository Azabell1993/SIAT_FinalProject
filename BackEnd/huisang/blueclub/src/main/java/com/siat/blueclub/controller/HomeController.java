package com.siat.blueclub.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.siat.blueclub.domain.Member;

@Controller
public class HomeController {
	
	@GetMapping("test")
	@ResponseBody
	public String test() {
		System.out.println("test check");
		return "이 택스트가 보내지나요?";
	}
	@CrossOrigin
	@GetMapping("jsonTest")
	@ResponseBody
	public Member jsonTest() {
		Member test = new Member();
		test.setMemID("test");
		test.setMemPW("1234");
		System.out.println("jsonTest check");
		return test;
	}

}
