package com.siat.blueclub.domain;

import java.util.Date;

import javax.persistence.Entity;
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
public class Role {
	@Id
	private Integer roleCode;
	private String roleName;
	@Override
	public String toString() {
		return "Role [roleCode=" + roleCode + ", roleName=" + roleName + "]";
	}
	
	

}
