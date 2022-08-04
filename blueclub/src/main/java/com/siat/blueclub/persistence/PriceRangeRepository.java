package com.siat.blueclub.persistence;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.PriceRange;

public interface PriceRangeRepository extends CrudRepository<PriceRange, Integer> {
	Optional<PriceRange> findByPriceRangeName(String priceRangeName);

}
