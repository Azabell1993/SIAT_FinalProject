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
public class PriceRange {
	@Id
	private Integer priceRangeCode;
	private String priceRangeName;
	@Override
	public String toString() {
		return "PriceRange [priceRangeCode=" + priceRangeCode + ", priceRangeName=" + priceRangeName + "]";
	}
	
}
