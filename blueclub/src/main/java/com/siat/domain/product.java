package com.siat.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer proCode;
	
	private String proName;
	private Integer proPrice;
	private Integer proStock;
	private String proDetail;
	private Integer proCount;
	
	@OneToMany
	@JoinColumn(name = "categoryCode")
	private Integer proCategory;
	@OneToMany
	@JoinColumn(name = "genderCode")
	private Integer proGender;
	@OneToMany
	@JoinColumn(name = "colorCode")
	private Integer proColor;
	@OneToMany
	@JoinColumn(name = "materialCode")
	private Integer proSize;
	@OneToMany
	@JoinColumn(name = "categoryCode")
	private Integer proMaterial;
	@OneToMany
	@JoinColumn(name = "seasonCode")
	private Integer proSeason;
	@OneToMany
	@JoinColumn(name = "priceRangeCode")
	private Integer proPriceRange;
	@OneToMany
	@JoinColumn(name = "ageCode")
	private Integer proAge;
}
