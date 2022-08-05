package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.http.HttpRequest;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriUtils;

import com.example.demo.domain.UploadedImage;
import com.example.demo.persistence.ImageRepository;

@Controller
public class HomeController {
	@Autowired
	private ImageRepository imageRepository;

	@RequestMapping("index")
	public String index() {
		return "/index";
	}

	@RequestMapping("load")
	public String load() {
		return "/load";
	}

	@GetMapping("test")
	@ResponseBody
	public Map<String, Object> test() { // 연결 테스트용 메소드 추후 삭제 예정
		System.out.println("test check");
		Map<String, Object> data = new HashMap<>();
		data.put("data", "이 텍스트가 보내지나요?");
		return data;
	}

	@PostMapping(value = "upload", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
	@ResponseBody
	public Map<String, Object> upload(@RequestPart String text, @RequestPart MultipartFile[] files) {
		String path = "D:\\study\\springboot\\fileUploadTest";
		System.out.println(text);
		Map<String, Object> data = new HashMap<>();
		List<UploadedImage> list = new ArrayList<>();
		for (MultipartFile file : files) {
			if (!file.isEmpty()) {
				UploadedImage image = new UploadedImage();
				image.setUuid(UUID.randomUUID().toString());
				image.setImageName(file.getOriginalFilename());
				image.setContentType(file.getContentType());
				image.setSavaPath(path);

				list.add(image);

				File newFile = new File(path, image.getUuid() + "_" + image.getImageName());
				try {
					file.transferTo(newFile);
					imageRepository.save(image);
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

	@PostMapping(value = "imageload", produces = "application/json; charset=utf8" )
	@ResponseBody
	public ResponseEntity<Resource> getItemImageByName(@RequestBody Map<String, Object> fileNameData)
			throws NotFoundException {
		String fileName = (String) fileNameData.get("fileName");
		try {
			UploadedImage image = imageRepository.findByImageName(fileName).orElse(null);
			System.out.println(image.toString());
			FileSystemResource resource = new FileSystemResource(
					image.getSavaPath() + "/" + image.getUuid() + "_" + image.getImageName());
			if (!resource.exists()) {
				throw new NotFoundException();
			}

			System.out.println(resource);
			HttpHeaders header = new HttpHeaders();
			Path filePath = null;
			filePath = Paths.get(image.getSavaPath() + "/" + image.getUuid() + "_" + image.getImageName());
			header.add("Content-Type", Files.probeContentType(filePath));
			return new ResponseEntity<Resource>(resource, header, HttpStatus.OK);
		} catch (Exception e) {
			throw new NotFoundException();
		}
	}
}
