package com.siat.blueclub.persistence;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Cart;
import com.siat.blueclub.domain.Member;
import com.siat.blueclub.domain.Product;

public interface CartRepository extends CrudRepository<Cart, Long> {
	List<Cart> findAllByMemID(Member mem);
	Optional<Cart> findByMemIDAndProCode(Member memID, Product proCode);
}
