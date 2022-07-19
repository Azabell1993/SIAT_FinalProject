package com.siat.blueclub;

import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.siat.domain.Member;

import lombok.Data;

@SpringBootApplication
public class BlueclubApplication {

	public static void main(String[] args) {
		
		Member member = new Member();
		member.setMemID("maple7280");
		member.setMemName("김호중");
		member.setMemPhone("010-2734-7280");
		member.setMemEMail("khj30687@gmail.com");
		member.setMemPW("1234");
		member.setMemAddr("광진구 아차산로 637");
		member.setMemRole(0);
		
		System.out.println(member.toString());
		SpringApplication.run(BlueclubApplication.class, args);
	}

}
