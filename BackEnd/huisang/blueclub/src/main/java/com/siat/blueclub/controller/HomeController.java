package com.siat.blueclub.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.siat.blueclub.Service.MemService;
import com.siat.blueclub.domain.Member;
import com.siat.blueclub.domain.Role;

@Controller
public class HomeController {
	
	@Autowired
	private MemService memService;
	
	@CrossOrigin
	@GetMapping("test")
	@ResponseBody
	public Map<String, Object> test() {
		System.out.println("test check");
		Map<String, Object> data = new HashMap<>();
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
		test.setMemRole(new Role(1, "user"));
		System.out.println("jsonTest check");
		return test;
	}
	@CrossOrigin
	@PostMapping("loginProc")
	@ResponseBody
	public Map<String, Object> loginProc(@RequestBody Member mem) {
		Map<String, Object> data = new HashMap<>();
		System.out.println(mem.toString());
		if( memService.loginCheck(mem) ) { 
			System.out.println(mem + " 로그인");
			data.put("data", true);
			data.put("mem", memService.getMem(mem));
		} else { 
			data.put("data", false);
			data.put("mem", null);
			}
		return data;
	}	
	@CrossOrigin
	@PostMapping("idCheckProc")
	@ResponseBody
	public Map<String, Object> idCheckProc(@RequestBody Member mem) {
		Map<String, Object> data = new HashMap<>();
		System.out.println(mem.toString());
		if (memService.idCheck(mem)) {
			data.put("data", true);
		} else {
			data.put("data", false);
		}
		return data;
	}
	@CrossOrigin
	@PostMapping("signUpProc")
	@ResponseBody
	public Map<String, Object> signUpProc(@RequestBody Member mem) {
		Map<String, Object> data = new HashMap<>();
		System.out.println(mem.toString());
		if(memService.signUp(mem)) {
			data.put("data", true);
		} else {
			data.put("data", false);
		}
		
		return data;
	}
	

}
