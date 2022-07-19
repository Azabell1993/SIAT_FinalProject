package com.siat.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Size {
	
	@Id
	private Integer sizeCode;
	private String sizeName;
}
