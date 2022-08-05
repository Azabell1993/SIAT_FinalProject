package com.siat.blueclub.persistence;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Member;
import com.siat.blueclub.domain.Product;
import com.siat.blueclub.domain.WatchedProduct;

public interface WatchedProductRepositroy extends CrudRepository<WatchedProduct, Long> {
	Iterable<WatchedProduct> findAllByMemID(Member memID);

}
