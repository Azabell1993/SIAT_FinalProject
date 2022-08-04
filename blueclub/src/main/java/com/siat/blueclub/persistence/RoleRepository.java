package com.siat.blueclub.persistence;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Role;

public interface RoleRepository extends CrudRepository<Role, Integer> {
	Optional<Role> findByRoleName(String roleName);

}
