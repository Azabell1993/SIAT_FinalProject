package com.siat.blueclub.persistence;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Role;

public interface RoleRepository extends CrudRepository<Role, Integer> {

}
