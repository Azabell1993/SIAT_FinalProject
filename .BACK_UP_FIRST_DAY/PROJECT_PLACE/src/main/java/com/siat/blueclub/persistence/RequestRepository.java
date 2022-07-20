package com.siat.blueclub.persistence;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Request;

public interface RequestRepository extends CrudRepository<Request, Long>{

}
