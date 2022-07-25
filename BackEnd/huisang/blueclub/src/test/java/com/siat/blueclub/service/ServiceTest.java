package com.siat.blueclub.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.siat.blueclub.domain.Product;

@SpringBootTest
public class ServiceTest {

	@Autowired
	private CategoryService categoryService;
	@Autowired
	private ProService proService;
	@Disabled
	@Test
	public void categoryTest() {
		Map<String, Object> categoryMap = categoryService.getCategoryMap();
		

		System.out.println(categoryMap.toString());
	}

	@Test
	public void proTest() {
		List<Long> test = new ArrayList<>();
		List<Integer> data = new ArrayList<>();
		data.add(1);
		data.add(3);
		test = proService.getRecommend(data);
		System.out.println(test);
	}
}
