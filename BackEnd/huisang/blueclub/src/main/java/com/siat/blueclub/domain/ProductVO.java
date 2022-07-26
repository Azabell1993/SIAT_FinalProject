package com.siat.blueclub.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductVO {
	private Long pro_Code;
	private String pro_Name; //상품명
	private Integer pro_Price; //가격
	private Integer pro_Stock; //재고
	private String pro_Detail; //상세 설명
	private Integer pro_Count;
	private String proImage;


	private Integer category_Code;
	private Integer gender_Code;
	private Integer color_Code;
	private Integer material_Code;
	private Integer age_Code;
	private Integer priceRange_Code;
	private Integer season_Code;
	@Override
	public String toString() {
		return "ProductVO [pro_Code=" + pro_Code + ", pro_Name=" + pro_Name + ", pro_Price=" + pro_Price
				+ ", pro_Stock=" + pro_Stock + ", pro_Detail=" + pro_Detail + ", pro_Count=" + pro_Count
				+ ", category_Code=" + category_Code + ", gender_Code=" + gender_Code + ", color_Code=" + color_Code
				+ ", material_Code=" + material_Code + ", age_Code=" + age_Code + ", priceRange_Code=" + priceRange_Code
				+ ", season_Code=" + season_Code + "]";
	}
	
	
	
}
