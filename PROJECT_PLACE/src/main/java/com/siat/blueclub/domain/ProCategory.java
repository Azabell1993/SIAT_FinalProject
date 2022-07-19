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
public class ProCategory {
	@Id
	private Integer categoryCode;
	private String categoryLargeName;
	private String categorySmallName;
	@Override
	public String toString() {
		return "Category [categoryCode=" + categoryCode + ", categoryLargeName=" + categoryLargeName
				+ ", categorySmallName=" + categorySmallName + "]";
	}
	
	

}
