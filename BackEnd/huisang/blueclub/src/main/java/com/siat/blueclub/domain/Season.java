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
public class Season {
	@Id
	private Integer seasonCode;
	private String seasonName;
	@Override
	public String toString() {
		return "Season [seasonCode=" + seasonCode + ", seasonName=" + seasonName + "]";
	}
	
}
