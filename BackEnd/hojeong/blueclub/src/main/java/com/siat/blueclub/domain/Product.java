package com.siat.blueclub.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "PRO_ID_SEQ")	
	private Long proCode;
	private String proName;
	private Integer proPrice;
	private Integer proStock;
	private String proDetail;
	private Integer proCount;
	
	@ManyToOne
	@JoinColumn(name="categoryCode")
	private ProCategory proCategory;
	@ManyToOne
	@JoinColumn(name="genderCode")
	private Gender proGender;
	@ManyToOne
	@JoinColumn(name="colorCode")
	private Color proColor;
	@ManyToOne
	@JoinColumn(name="materialCode")
	private Material proMaterial;
	@ManyToOne
	@JoinColumn(name="seasonCode")
	private Season proSeason;
	@ManyToOne
	@JoinColumn(name="ageCode")
	private Age proAge;
	@ManyToOne
	@JoinColumn(name="priceRangeCode")
	private PriceRange proPriceRange;
	@Override
	public String toString() {
		return "Product [proCode=" + proCode + ", proName=" + proName + ", proPrice=" + proPrice + ", proStock="
				+ proStock + ", proDetail=" + proDetail + ", proCount=" + proCount + ", proCategory=" + proCategory
				+ ", proGender=" + proGender + ", proColor=" + proColor + ", proMaterial=" + proMaterial
				+ ", proSeason=" + proSeason + ", proAge=" + proAge + ", proPriceRange=" + proPriceRange + "]";
	}

}
