package com.siat.blueclub.service;

import static org.junit.jupiter.api.Assertions.assertTrue;

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
import org.springframework.transaction.annotation.Transactional;

import com.siat.blueclub.domain.Member;
import com.siat.blueclub.domain.Product;
import com.siat.blueclub.persistence.CartRepository;
import com.siat.blueclub.persistence.DeleteDao;
import com.siat.blueclub.persistence.GenderRepository;
import com.siat.blueclub.persistence.ImageRepository;
import com.siat.blueclub.persistence.MemberRepository;
import com.siat.blueclub.persistence.ProCategoryRepository;
import com.siat.blueclub.persistence.ProductDao;
import com.siat.blueclub.persistence.ProductRepository;
import com.siat.blueclub.persistence.WatchedProductRepositroy;

@SpringBootTest
public class ServiceTest {

	@Autowired
	private CategoryService categoryService;
	@Autowired
	private ProService proService;
	@Autowired
	private ProductDao proDao;
	@Autowired
	private CartService cartService;
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private ProCategoryRepository categoryRepository;
	@Autowired
	private CartRepository cartRepository;
	@Autowired
	private MemberRepository memberRepository;
	@Autowired
	private GenderRepository genderRepository;
	@Autowired
	private ImageRepository imageRepository;
	@Autowired
	private WatchedProductRepositroy watchedProductRepositroy;
	@Autowired
	private DeleteDao deleteDao;
	
	@Disabled
	@Test
	public void categoryTest() {
		Map<String, Object> categoryMap = categoryService.getCategoryMap();
		

		System.out.println(categoryMap.toString());
	}
	
	@Disabled
	@Test
	public void proTest() {
		proService.deleteProduct(" 머슬 핏 민소매");
		proService.deleteProduct("모노그램 모티프 코튼 피케 폴로셔츠");
		proService.deleteProduct("test");
	}
	
	@Disabled
	@Test
	public void mybatisTest() {
		List<Integer> data = new ArrayList<>();
		int start = categoryService.getCategoryRagneStart("상의"); // 카테고리 대분류 범위 시작 찾기
		int end = categoryService.getCategoryRagneEnd("상의"); // 카테고리 대분류 범위 끝 찾기
//		System.out.println(start + " | " + end);
//		System.out.println(proDao.getProductsByCategoryNames("상의", "반소매"));
//		System.out.println(proDao.getProductsByCategoryCodeRange(start, end));
		System.out.println(proService.getRecommendByCategory("admin", "상의", "반소매"));
	}
	@Disabled
	@Test
	public void cartTest() {
//		cartService.addCart(productRepository.findByProName("sample3").get().getProCode(), 3, "user3");
		cartService.buyCart("admin");

	}
	
}
