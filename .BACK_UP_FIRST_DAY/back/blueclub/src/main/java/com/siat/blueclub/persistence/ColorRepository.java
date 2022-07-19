package com.siat.blueclub.persistence;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Color;

public interface ColorRepository extends CrudRepository<Color, Integer>{
	Optional<Color> findByColorName(String colorName);

}
