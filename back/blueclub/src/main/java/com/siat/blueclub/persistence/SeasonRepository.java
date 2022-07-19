package com.siat.blueclub.persistence;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.siat.blueclub.domain.Season;

public interface SeasonRepository extends CrudRepository<Season, Integer> {
	Optional<Season> findBySeasonName(String seasonName);

}
