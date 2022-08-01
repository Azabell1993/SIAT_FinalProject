package com.siat.blueclub.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ProImage {
	@Id
	private String imageID;
	private String originName;
	@Column(unique = true)
	private String saveName;
	private String contentType;
	private String savaPath;
	
	@ManyToOne
	@JoinColumn(name="proName")
	private Product proName;

}
