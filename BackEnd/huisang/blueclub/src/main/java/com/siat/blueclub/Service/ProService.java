package com.siat.blueclub.service;

import java.util.List;

import com.siat.blueclub.domain.Product;
import com.siat.blueclub.domain.ProAddVO;


public interface ProService {

	List<Long> getRecommend(List<Integer> proCodeList); //상품 리스트

	Product getProInfo(Long proCode); //상품 코드를 기반으로 한 상품 정보 조회

	boolean proAdd(ProAddVO vo); //상품 등록

}
