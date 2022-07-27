package com.siat.blueclub.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import com.siat.blueclub.domain.ProCategory;
import com.siat.blueclub.persistence.ProCategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private ProCategoryRepository categoryRepository;

	@Override
	public List<String> getLargeNames() { //카테고리 대분류 리스트를 반환하는 메소드
		List<ProCategory> category = (List<ProCategory>) categoryRepository.findAll(); //전체 카테고리 데이터
		List<String> largeName = new ArrayList<String>(); //카테고리 대분류 리스트
		for (ProCategory i : category) { //전체 카테고리 데이터에서 대분류 이름만 저장용 리스트에 저장
			if (!largeName.contains(i.getCategoryLargeName())) //전체 데이터를 조회하므로 대분류 이름이 중복됨, 이미 저장되어 있는 대분류는 저장하지 않음
				largeName.add(i.getCategoryLargeName());
		}
		return largeName;
	}

	@Override
	public Map<String, Object> getCategoryMap() { //카테고리 전체 정보 -> {대분류 : [소분류]} 형식의 데이터로 retrun 
		Map<String, Object> categoryMap = new HashMap<>(); //카테고리 전체 정보 Map
		List<String> largeName = getLargeNames(); //Key값이 될 대분류 리스트
		List<ProCategory> categoryData = (List<ProCategory>) categoryRepository.findAll(); //카테고리 전체 데이터
		
		for(String i :largeName) {//대분류 리스트 조회
			List<String> temp = new ArrayList<>(); //임시 소분류 리스트
			for(ProCategory j : categoryData ) { //카테고리 전체 데이터 조회 -> 대분류 값이 같은 데이터만 임시 소분류 리스트에 삽입
				if(j.getCategoryLargeName().equals(i)) {
					temp.add(j.getCategorySmallName());
				}
			}
		
			categoryMap.put(i, temp); //{대분류 : [소분류]} 형식으로 저장
			
		}
		
		return categoryMap;
	}

	@Override
	public Integer getCategoryRagneStart(String categoryLargeName) { //카테고리 대분류 범위 시작 찾기
		List<ProCategory> list = (List<ProCategory>) categoryRepository.findAllByCategoryLargeName(categoryLargeName);
		return list.get(0).getCategoryCode();
	}

	@Override
	public Integer getCategoryRagneEnd(String categoryLargeName) { //카테고리 대분류 범위 끝 찾기
		List<ProCategory> list = (List<ProCategory>) categoryRepository.findAllByCategoryLargeName(categoryLargeName);
		int lastIndex = list.size()-1;
		return list.get(lastIndex).getCategoryCode();
	}


}
