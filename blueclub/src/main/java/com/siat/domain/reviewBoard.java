package com.siat.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
public class reviewBoard {
	@Id
	private Integer reviewNo;
	
	@OneToMany
	@JoinColumn(name = "memID")
	private String reviewWriter;
	@OneToMany
	@JoinColumn(name = "proCode")
	private Integer reviewProduct;
	
	@Column(insertable = false, updatable = false, columnDefinition = "date default sysdate")
	private Data reviewDate;
	private String reviewTitle;
	private String reviewContent;
	
	private Integer reviewStar;
	private String reviewPhoto;
}
