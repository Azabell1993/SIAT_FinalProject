package com.siat.blueclub.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siat.blueclub.domain.Cart;
import com.siat.blueclub.domain.Member;
import com.siat.blueclub.persistence.CartRepository;
import com.siat.blueclub.persistence.MemberRepository;
import com.siat.blueclub.persistence.ProductRepository;

@Service
public class CartServiceImpl implements CartService {
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private MemberRepository memberRepository;
	@Autowired
	private ProductRepository productRepository;

	@Override
	public List<Cart> getCartBymemID(Member mem) {
		return (List<Cart>) cartRepository.findAllByMemID(mem);
	}

	@Override
	public boolean addCart(Long proCode, Integer cartCount, String memID) {
		Cart cart = new Cart();
		Optional<Cart> optional = cartRepository.findByMemIDAndProCode(memberRepository.findById(memID).get(), productRepository.findById(proCode).get());
		if(optional.isEmpty()) {
			//해당 사용자의 장바구니에 해당 상품이 이미 담겨 있지 않은 경우 -> 일반적인 장바구니 추가
			cart.setMemID(memberRepository.findById(memID).get());
			cart.setProCode(productRepository.findById(proCode).get());
			cart.setCartCount(cartCount);
			cartRepository.save(cart);
			
		} else {
			//헤당 사용자의 장바구니에 해당 상품이 이미 담겨 있는 경우 -> cartCount 필드 update
			cart = optional.get();
			cart.setCartCount(cartCount);
			cartRepository.save(cart);
		}
		
		if(cartRepository.findById(cart.getSeq()).isEmpty()) { //장바구니 저장이 잘 됬는 지 확인
			return false;
		} else {
			return true;
		}
		
	}

	@Override
	public boolean deleteCart(Long proCode, String memID) {
		Cart cart = cartRepository.findByMemIDAndProCode(memberRepository.findById(memID).get(), productRepository.findById(proCode).get()).get();
		cartRepository.delete(cart);
		if(cartRepository.findByMemIDAndProCode(memberRepository.findById(memID).get(), productRepository.findById(proCode).get()).isEmpty()) {
			return true;
		} else {
			return false;
		}
	}

}
