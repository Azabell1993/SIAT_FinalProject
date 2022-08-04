package com.siat.blueclub.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siat.blueclub.domain.Cart;
import com.siat.blueclub.domain.Member;
import com.siat.blueclub.domain.Product;
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
	public List<Cart> getCartBymemID(Member mem) { // 해당 member의 장바구니 목록
		Member member = memberRepository.findById(mem.getMemID()).get();
		return (List<Cart>) cartRepository.findAllByMemID(member);
	}

	@Override
	public boolean addCart(Long proCode, Integer cartCount, String memID) { // 장바구니 추가
		Cart cart = new Cart();
		Optional<Cart> optional = cartRepository.findByMemIDAndProCode(memberRepository.findById(memID).get(),
				productRepository.findById(proCode).get());
		Product product = productRepository.findById(proCode).get();
		int count = product.getProStock();
		if (count - cartCount < 0) {
			return false;
		} else {
			if (optional.isEmpty()) {
				// 해당 사용자의 장바구니에 해당 상품이 이미 담겨 있지 않은 경우 -> 일반적인 장바구니 추가
				cart.setMemID(memberRepository.findById(memID).get());
				cart.setProCode(product);
				cart.setCartCount(cartCount);
				cartRepository.save(cart);

				product.setProCount(count - cartCount);
				productRepository.save(product);

			} else {
				// 헤당 사용자의 장바구니에 해당 상품이 이미 담겨 있는 경우 -> cartCount 필드 update
				cart = optional.get();
				cart.setCartCount(cartCount);
				cartRepository.save(cart);

				product.setProCount(count - cartCount);
				productRepository.save(product);
			}

			if (cartRepository.findById(cart.getSeq()).isEmpty()) { // 장바구니 저장이 잘 됬는 지 확인
				return false;
			} else {
				return true;
			}
		}

	}

	@Override
	public boolean deleteCart(Long proCode, String memID) { // 장바구니 삭제
		Cart cart = cartRepository.findByMemIDAndProCode(memberRepository.findById(memID).get(),
				productRepository.findById(proCode).get()).get();
		cartRepository.delete(cart);
		if (cartRepository.findByMemIDAndProCode(memberRepository.findById(memID).get(),
				productRepository.findById(proCode).get()).isEmpty()) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public boolean buyCart(String memID) { // 구매하기 -> 임시로 해당 Member 장바구니 비우는 동작으로 구현
		Member member = memberRepository.findById(memID).get();

		List<Cart> list = getCartBymemID(member);
		if (list.size() != 0) {
			for (Cart i : list) {
				cartRepository.delete(i);
			}
		} else {
			return true;
		}

		list = getCartBymemID(member);
		if (list.size() != 0) {
			return false;
		} else {
			return true;
		}

	}

}
