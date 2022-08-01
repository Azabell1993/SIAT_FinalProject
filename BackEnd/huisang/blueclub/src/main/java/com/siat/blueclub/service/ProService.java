package com.siat.blueclub.service;

import java.util.List;

import org.springframework.core.io.Resource;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.siat.blueclub.domain.Product;
import com.siat.blueclub.domain.Season;
import com.siat.blueclub.domain.Age;
import com.siat.blueclub.domain.Color;
import com.siat.blueclub.domain.Gender;
import com.siat.blueclub.domain.Material;
import com.siat.blueclub.domain.PriceRange;
import com.siat.blueclub.domain.ProAddVO;
import com.siat.blueclub.domain.ProImage;


public interface ProService {

	public List<Long> getRecommend(List<Integer> proCodeList); //상품 리스트

	public Product getProInfo(Long proCode); //상품 코드를 기반으로 한 상품 정보 조회

	public boolean proAdd(ProAddVO vo); //상품 등록
	
	public List<Long> getRecommendByCategory(List<Integer> proCodeList, String categoryName, String categorySamllName);  //카테고리 별 상품 리스트 -> MyBatis 사용

	public List<Age> ageInfo(); //age 테이블 정보

	public List<Color> colorInfo(); //color 테이블 정보

	public List<Gender> genderInfo(); //gender 테이블 정보

	public List<Material> materialInfo(); //material 테이블 정보

	public List<PriceRange> priceRangeInfo(); //priceRange 테이블 정보

	public List<Season> seasonInfo(); //season 테이블 정보

	public boolean proView(Long proID); //상품 조회 -> 조회수 증가

	public boolean imageUpload(String proName, MultipartFile[] proImage);

	public ResponseEntity<Resource> imageLoad(String imageID) throws NotFoundException;



}
