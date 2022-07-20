package com.siat.blueclub.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.siat.blueclub.domain.Member;

@Controller
public class HomeController {
	
	@CrossOrigin
	@GetMapping("test")
	@ResponseBody
	public Map<String, String> test() {
		System.out.println("test check");
		Map<String, String> data = new HashMap<>();
		data.put("data", "이 텍스트가 보내지나요?");
		return data;
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
	@CrossOrigin
	@PostMapping("loginTest")
	@ResponseBody
	public Map<String, String> loginTest(@RequestBody Member mem) {
		System.out.println(mem.toString());
		Map<String, String> data = new HashMap<>();
		data.put("data", mem.getMemID() + " | " + mem.getMemPW());
		return data;
	}	

}
