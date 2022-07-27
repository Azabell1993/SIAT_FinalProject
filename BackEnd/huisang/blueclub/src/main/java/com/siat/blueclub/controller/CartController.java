package com.siat.blueclub.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.siat.blueclub.domain.Cart;
import com.siat.blueclub.domain.Member;
import com.siat.blueclub.service.CartService;

@Controller
@RequestMapping("/cart")
public class CartController {
	@Autowired
	private CartService cartService;
	
	@CrossOrigin
	@PostMapping("cartInfo")
	@ResponseBody
	public Map<String, Object> cartInfo(Member mem) { //해당 member의 장바구니 목록
		Map<String, Object> data = new HashMap<>();
		List<Cart> list = cartService.getCartBymemID(mem); //해당 member의 장바구니 목록 서비스
		data.put("data", list);
		return data;
	}
	@CrossOrigin
	@PostMapping("addCart")
	@ResponseBody
	public Map<String, Object> addCart(Map<String, Object> cartMap) { 
		Map<String, Object> data = new HashMap<>();
		Long proCode = (Long) cartMap.get("proCode");
		Integer cartCount = (Integer) cartMap.get("cartCount");
		String memID = (String) cartMap.get("memID");
		if( cartService.addCart(proCode, cartCount, memID)) { //장바구니 추가 서비스
			data.put("data", "true"); //장바구니 추가 성공 시 true  전송
		} else {
			data.put("data", "false"); //장바구니 추가 실패 시 false 전송
		}
		return data;
	}
	@CrossOrigin
	@PostMapping("deleteCart")
	@ResponseBody
	public Map<String, Object> deleteCart(Map<String, Object> cartMap) { 
		Map<String, Object> data = new HashMap<>();
		Long proCode = (Long) cartMap.get("proCode");
		String memID = (String) cartMap.get("memID");
		if( cartService.deleteCart(proCode, memID)) { //장바구니 삭제 서비스
			data.put("data", "true"); //삭제 성공 시 true 전송
		} else {
			data.put("data", "false"); //삭제 실패 시 false 전송
		}
		return data;
	}
}
