package com.siat.persistence;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.siat.domain.Member;

public interface memberRepository extends CrudRepository<Member, String>{
	
}
