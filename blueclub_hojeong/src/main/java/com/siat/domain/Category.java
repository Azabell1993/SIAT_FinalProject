package com.siat.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Category {
	@Id
	private Integer categoryCode;
	private String categorylargeName;
	private String categorysmallName;
	
	
}
