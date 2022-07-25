package com.siat.blueclub.domain;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductVO {
	private String proName; //상품명
	private Integer proPrice; //가격
	private Integer proStock; //재고
	private String proDetail; //상세 설명

	private String categorySmallName; //카테고리 소분류 이름
	private String genderName; //성별 속성 이름
	private String colorName; //색깔 속성 이름
	private String materialName; //재질 속성 이름
	private String ageName; //나이 속성 이름
	private String priceRangeName; //가격대 속성 이름
	@Override
	public String toString() {
		return "ProductVO [proName=" + proName + ", proPrice=" + proPrice + ", proStock=" + proStock + ", proDetail="
				+ proDetail + ", categorySmallName=" + categorySmallName + ", genderName=" + genderName + ", colorName="
				+ colorName + ", materialName=" + materialName + ", ageName=" + ageName + ", priceRangeName="
				+ priceRangeName + "]";
	}
	
	
}
