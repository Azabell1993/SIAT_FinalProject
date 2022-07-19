package com.siat.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class role {
	@Id
	private Integer roleCode;
	private String roleName;
}
