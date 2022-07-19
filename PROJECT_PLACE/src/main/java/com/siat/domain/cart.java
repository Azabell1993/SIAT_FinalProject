package com.siat.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class cart {
	
	@Id
	@SequenceGenerator(
			name = "cart_sequence",
			sequenceName = "cart_sequence",
			allocationSize = 1
	)
	
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cart_sequence")
	private Long seq;
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer proCode;
	private Integer cartCnt;
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String memID;
}
