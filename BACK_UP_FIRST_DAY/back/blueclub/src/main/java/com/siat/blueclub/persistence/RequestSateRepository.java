package com.siat.blueclub.persistence;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.RequestState;


public interface RequestSateRepository extends CrudRepository<RequestState, Integer> {
	Optional<RequestState> findByRequestStateName(String RequestStateName);

}
