package com.siat.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Gender {
	@Id
	private Integer genderCode;
	private String genderName;
}
