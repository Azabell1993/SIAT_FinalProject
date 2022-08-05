package com.siat.blueclub.domain;

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
public class Cart {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "CART_ID_SEQ")	
	private Long seq;
	private Integer cartCount;
	
	@ManyToOne
	@JoinColumn(name="memID")
	private Member memID;
	@ManyToOne
	@JoinColumn(name="proCode")
	private Product proCode;
	@Override
	public String toString() {
		return "Cart [seq=" + seq + ", cartCount=" + cartCount + ", memID=" + memID + ", proCode=" + proCode + "]";
	}
}
