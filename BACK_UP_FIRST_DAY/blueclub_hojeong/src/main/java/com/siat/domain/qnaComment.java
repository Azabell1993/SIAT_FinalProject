package com.siat.domain;

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
public class qnaComment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer qnaNo;
	private Integer qnaCoOrder;
	private String qnaCoWriter;
	
	@Column(insertable = false, updatable = false, columnDefinition = "date default sysdate")
	private Data qnaCoDate;
	
	private String qnaCoContent;
	
}
