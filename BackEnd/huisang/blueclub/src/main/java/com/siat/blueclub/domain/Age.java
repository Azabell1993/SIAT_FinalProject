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
public class Age {
	@Id
	private Integer ageCode;
	private String ageName;
	@Override
	public String toString() {
		return "Age [ageCode=" + ageCode + ", ageName=" + ageName + "]";
	}
	
}
