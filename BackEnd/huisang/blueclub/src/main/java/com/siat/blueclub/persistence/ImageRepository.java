package com.siat.blueclub.persistence;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.ProImage;
import com.siat.blueclub.domain.Product;

public interface ImageRepository extends CrudRepository<ProImage, String>{
	Optional<ProImage> findByProName(Product product);

}
