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
	public List<String> getLargeNames() {
		List<ProCategory> category = (List<ProCategory>) categoryRepository.findAll();
		List<String> largeName = new ArrayList<String>();
		for (ProCategory i : category) {
			if (!largeName.contains(i.getCategoryLargeName()))
				largeName.add(i.getCategoryLargeName());
		}
		return largeName;
	}

	@Override
	public Map<String, Object> getCategoryMap() {
		Map<String, Object> categoryMap = new HashMap<>();
		List<String> largeName = getLargeNames();
		List<ProCategory> categoryData = (List<ProCategory>) categoryRepository.findAll();
		
		for(String i :largeName) {
			List<String> temp = new ArrayList<>();
			for(ProCategory j : categoryData ) {
				if(j.getCategoryLargeName().equals(i)) {
					temp.add(j.getCategorySmallName());
				}
			}
			categoryMap.put(i, temp);
			
		}
		return categoryMap;
	}

}
