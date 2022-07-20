package com.siat.blueclub.persistence;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Material;

public interface MaterialRepository extends CrudRepository<Material, Integer> {
	Optional<Material> findByMaterialName(String materialName);

}
