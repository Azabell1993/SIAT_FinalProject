package com.siat.blueclub.domain;

import java.util.Date;

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
public class Request {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_Sequence")
	@SequenceGenerator(name = "id_Sequence", sequenceName = "ID_SEQ")
	private Long requestCode;
	private Integer requestCount;
	private Date requestDate;
	private Date requestFinishDate;
	@ManyToOne
	@JoinColumn(name="memID")
	private Member memID;
	@ManyToOne
	@JoinColumn(name="proCode")
	private Product proCode;
	@ManyToOne
	@JoinColumn(name="requestStateCode")
	private RequestState requestStateCode;
	@Override
	public String toString() {
		return "Request [requestCode=" + requestCode + ", requestCount=" + requestCount + ", requestDate=" + requestDate
				+ ", requestFinishDate=" + requestFinishDate + ", memID=" + memID + ", proCode=" + proCode
				+ ", requestStateCode=" + requestStateCode + "]";
	}
}
