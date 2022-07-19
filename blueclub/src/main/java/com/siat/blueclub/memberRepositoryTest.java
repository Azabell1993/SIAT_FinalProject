package com.siat.blueclub;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.siat.domain.Member;
import com.siat.persistence.memberRepository;

@SpringBootTest
public class memberRepositoryTest{

	@Autowired
	private memberRepository repository;
	
	@Test
	public void memberTest() {
		Member memData = Member.builder().memID("첫번째 아이디").memName("홍길동").memPW("1234").memAddr("서울시 광진구").memEMail("maple7280@naver.com").memPhone("010-2734-7280").memRole(0).build();
		repository.save(memData);
	}
}
