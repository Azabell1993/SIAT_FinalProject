package com.example.demo.persistence;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.domain.UploadedImage;

public interface ImageRepository extends CrudRepository<UploadedImage, Long> {
	Optional<UploadedImage> findByImageName(String imageName);
}
