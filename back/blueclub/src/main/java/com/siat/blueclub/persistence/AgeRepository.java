package com.siat.blueclub.persistence;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Age;

public interface AgeRepository extends CrudRepository<Age, Integer> {
	Optional<Age> findByAgeName(String ageName);

}
