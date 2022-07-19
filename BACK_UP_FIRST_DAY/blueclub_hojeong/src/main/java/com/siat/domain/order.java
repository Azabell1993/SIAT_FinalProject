package com.siat.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
public class order {

	private Integer orderCode;
	private String memID;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer proCode;
	private Integer orderPrice;
	private Integer orderCount;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer orderState;
	
	
	@Column(insertable = false, updatable = false, columnDefinition = "date default sysdate")
	private Data orderDate;
	
	@Column(insertable = false, updatable = false, columnDefinition = "date default sysdate")
	private Data orderStartDate;
	
	@Column(insertable = false, updatable = false, columnDefinition = "date default sysdate")
	private Data orderFinishDate;
	
}
