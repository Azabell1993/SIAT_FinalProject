package com.siat.blueclub.persistence;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.ProCategory;

public interface ProCategoryRepository extends CrudRepository<ProCategory, Integer> {
	Optional<ProCategory> findByCategorySmallName(String categorySmallName);
	Iterable<ProCategory> findAllByCategoryLargeName(String categoryLargeName);
	Optional<ProCategory> findByCategoryLargeNameAndCategorySmallName(String categoryLargeName, String categorySmallName);

}
