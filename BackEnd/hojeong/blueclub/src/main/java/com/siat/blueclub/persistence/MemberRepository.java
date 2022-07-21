package com.siat.blueclub.persistence;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Member;

public interface MemberRepository extends CrudRepository<Member, String> {
	
}
