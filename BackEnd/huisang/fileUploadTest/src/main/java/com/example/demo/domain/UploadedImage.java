package com.example.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class UploadedImage {
	@Id
	private String uuid;
	private String imageName;
	private String contentType;
	private String savaPath;
}
