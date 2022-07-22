package com.siat.blueclub.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ServiceTest {

	@Autowired
	private CategoryService categoryService;
	
	@Test
	public void categoryTest() {
		Map<String, Object> data = new HashMap<>();
		Map<String, Object> categoryMap = categoryService.getCategoryMap();
		List<String> largeName =  categoryService.getLargeNames();
		for(int i = 0; i < largeName.size(); i++) {
			data.put(largeName.get(i), categoryMap.get(largeName.get(i)));
		}

		System.out.println(data.toString());
	}
}
