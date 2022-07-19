package com.siat.blueclub.persistence;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
	Optional<Product> findByProName(String ProName);

}
