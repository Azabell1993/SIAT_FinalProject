package com.siat.blueclub.controller;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public Map<String, Object> cartInfo(@RequestBody Member mem, HttpServletRequest req) { //해당 member의 장바구니 목록
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + "| cartInfo | "  + mem.toString());
		List<Cart> list = cartService.getCartBymemID(mem); //해당 member의 장바구니 목록 서비스
		data.put("data", list);
		return data;
	}
	@CrossOrigin
	@PostMapping("addCart")
	@ResponseBody
	public Map<String, Object> addCart(@RequestBody Map<String, Object> cartMap, HttpServletRequest req) { //장바구니 추가
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | addCart | " + cartMap);
		Integer proCodeTemp = (Integer) cartMap.get("proCode");
		Long proCode = new Long(proCodeTemp);
		Integer cartCount = (Integer) cartMap.get("cartCount");
		String memID = (String) cartMap.get("memID");
		if(cartCount < 0 ) {
			data.put("data", "false");
			return data;
		}
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
	public Map<String, Object> deleteCart(@RequestBody Map<String, Object> cartMap, HttpServletRequest req) { // 장바구니 삭제
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | deleteCart | " + cartMap );
		Integer proCodeTemp = (Integer) cartMap.get("proCode");
		Long proCode = new Long(proCodeTemp);
		String memID = (String) cartMap.get("memID");
		if( cartService.deleteCart(proCode, memID)) { //장바구니 삭제 서비스
			data.put("data", "true"); //삭제 성공 시 true 전송
		} else {
			data.put("data", "false"); //삭제 실패 시 false 전송
		}
		return data;
	}
	@CrossOrigin
	@PostMapping("buyCart")
	@ResponseBody
	public Map<String, Object> buyCart(@RequestBody  Member memID, HttpServletRequest req) { 
		// 구매하기 -> 임시로 해당 Member 장바구니 비우는 동작으로 구현
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | buyCart | " + memID.getMemID() );
		if( cartService.buyCart(memID.getMemID())) { //구매하기 서비스 -> 임시로 해당 Member 장바구니 비우는 동작으로 구현
			data.put("data", "true"); //삭제 성공 시 true 전송
		} else {
			data.put("data", "false"); //삭제 실패 시 false 전송
		}
		return data;
	}
	
}
