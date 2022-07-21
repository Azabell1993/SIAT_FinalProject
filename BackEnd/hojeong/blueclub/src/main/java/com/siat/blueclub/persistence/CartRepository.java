package com.siat.blueclub.persistence;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Cart;
import com.siat.blueclub.domain.Member;

public interface CartRepository extends CrudRepository<Cart, Long> {
	List<Cart> findAllByMemID(Member memID);
}
