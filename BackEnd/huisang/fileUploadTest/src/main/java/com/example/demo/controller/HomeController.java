package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.net.http.HttpRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.UploadedImage;

@Controller
public class HomeController {

	@RequestMapping("index")
	public String index() {
		return "/index";
	}
	@GetMapping("test")
	@ResponseBody
	public Map<String, Object> test() { //연결 테스트용 메소드 추후 삭제 예정
		System.out.println("test check");
		Map<String, Object> data = new HashMap<>();
		data.put("data", "이 텍스트가 보내지나요?");
		return data;
	}
	@PostMapping("upload")
	@ResponseBody
	public Map<String, Object> upload(@RequestParam MultipartFile[] files){
		Map<String, Object> data = new HashMap<>();
		List<UploadedImage> list = new ArrayList<>();
		for (MultipartFile file : files) {
			if(!file.isEmpty()) {
				UploadedImage image = new UploadedImage();
				image.setUuid(UUID.randomUUID().toString());
				image.setImageName(file.getOriginalFilename());
				image.setContentType(file.getContentType());
				
				list.add(image);	
				
				File newFile = new File("D:/", image.getUuid() + "_" + image.getImageName());
				try {
					file.transferTo(newFile);
				} catch (IllegalStateException | IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		System.out.println(list.toString());
		data.put("list", list);
		return data;
	}
}
