package com.siat.blueclub.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Member {
	@Id
	private String memID;
	
	private String memPW;
	private String memName;
	private String memAddr;
	private String memPhone;
	private String memEMail;
	private Date memDate;
	private Date memBrith;
	
	@ManyToOne
	@JoinColumn(name="roleCode")
	private Role memRole;

	@Override
	public String toString() {
		return "Member [memID=" + memID + ", memPW=" + memPW + ", memName=" + memName + ", memAddr=" + memAddr
				+ ", memPhone=" + memPhone + ", memEMail=" + memEMail + ", memDate=" + memDate + ", memBrith="
				+ memBrith + ", memRole=" + memRole + "]";
	}
	
}
