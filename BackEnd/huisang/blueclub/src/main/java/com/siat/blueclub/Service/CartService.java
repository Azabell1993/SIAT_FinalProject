package com.siat.blueclub.service;


import java.util.List;

import com.siat.blueclub.domain.Cart;
import com.siat.blueclub.domain.Member;

public interface CartService {

	List<Cart> getCartBymemID(Member mem); //해당 member의 장바구니 목록

	boolean addCart(Long proCode, Integer cartCount, String memID); //장바구니 추가

	boolean deleteCart(Long proCode, String memID); //장바구니 삭제

}
