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
public class noticeBoard {
	
	@Id
	private Integer noticeNo;
	
	private String noticeWriter;
	
	
	private String noticeTitle;
	@Column(insertable = false, updatable = false, columnDefinition = "date default sysdate")
	private Data noticeDate;
	
	private String noticeContent;
	
	private Integer noticeCount;
	
}
