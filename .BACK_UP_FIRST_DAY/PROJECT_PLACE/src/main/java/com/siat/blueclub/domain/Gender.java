package com.siat.blueclub.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Gender {
	@Id
	private Integer genderCode;
	private String genderName;
	@Override
	public String toString() {
		return "Gender [genderCode=" + genderCode + ", genderName=" + genderName + "]";
	}

}
