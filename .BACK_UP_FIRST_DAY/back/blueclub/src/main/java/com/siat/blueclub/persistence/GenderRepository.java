package com.siat.blueclub.persistence;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Gender;

public interface GenderRepository extends CrudRepository<Gender, Integer>{
	Optional<Gender> findByGenderName(String genderName);

}
