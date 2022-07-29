package com.siat.blueclub.persistence;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.siat.blueclub.domain.ProductVO;

@Mapper
public interface ProductDao {

	public List<ProductVO> getProductsByCategoryNames(String categoryLargeName, String categorySmallName);
	public List<ProductVO> getProductsByCategoryCodeRange(Integer categoryRange1, Integer categoryRange2);
}
