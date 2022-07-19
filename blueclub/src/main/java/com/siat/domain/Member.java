package com.siat.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.hibernate.id.IntegralDataTypeHolder;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Member {
	
	@Id
	private String memID;
	private String memPW;
	private String memName;
	private String memAddr;
	private String memPhone;
	private String memEMail;

	@Column(insertable = false, updatable = false, columnDefinition = "date default sysdate" )
	private Data memDate; 
	
	@Column(insertable = true, updatable = true, columnDefinition = "date default sysdate" )
	private Data memBirth;
	
	
	@OneToOne()
	private Integer memRole;

	@Override
	public String toString() {
		return "member [memID=" + memID + ", memPW=" + memPW + ", memName=" + memName + ", memAddr=" + memAddr
				+ ", memPhone=" + memPhone + ", memEMail=" + memEMail + ", memDate=" + memDate + ", memBirth="
				+ memBirth + ", memRole=" + memRole + "]";
	}
	
	
}	
