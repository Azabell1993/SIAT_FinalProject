package com.siat.blueclub.service;

import java.util.List;
import java.util.Map;

public interface CategoryService {

	public List<String> getLargeNames(); //카테고리 대분류 리스트를 반환하는 메소드
	public Map<String, Object> getCategoryMap(); //카테고리 전체 정보 -> {대분류 : [소분류]} 형식
	public Integer getCategoryRagneStart(String categoryName); //카테고리 대분류 범위 시작 찾기
	public Integer getCategoryRagneEnd(String categoryName); //카테고리 대분류 범위 끝 찾기
	

}
