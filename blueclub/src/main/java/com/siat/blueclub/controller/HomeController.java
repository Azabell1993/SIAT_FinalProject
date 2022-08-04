package com.siat.blueclub.controller;

import java.util.HashMap;
import java.util.Map;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.siat.blueclub.domain.Member;

import com.siat.blueclub.domain.Role;

@Controller
public class HomeController {
	
	@RequestMapping("index")
	public String index() {
		return "/index";
	}
}
