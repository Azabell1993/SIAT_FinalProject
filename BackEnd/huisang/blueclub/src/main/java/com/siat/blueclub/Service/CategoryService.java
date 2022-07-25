package com.siat.blueclub.service;

import java.util.List;
import java.util.Map;

public interface CategoryService {

	Map<String, Object> getCategoryMap(); //카테고리 전체 정보 -> {대분류 : [소분류]} 형식

}
