package com.siat.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Color {
	
	@Id
	private Integer colorCode;
	private String colorName;
	
}
