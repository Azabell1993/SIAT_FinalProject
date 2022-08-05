package com.siat.blueclub.persistence;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DeleteDao {
	public void delImage(Long proCode);
	public void delWatched(Long proCode);
	public void delProduct(Long proCode);

}
