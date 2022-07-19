package com.siat.blueclub.persistence;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.siat.blueclub.domain.Age;
import com.siat.blueclub.domain.ProCategory;
import com.siat.blueclub.domain.Product;
import com.siat.blueclub.domain.Color;
import com.siat.blueclub.domain.Gender;
import com.siat.blueclub.domain.Material;
import com.siat.blueclub.domain.Member;
import com.siat.blueclub.domain.Request;
import com.siat.blueclub.domain.RequestState;
import com.siat.blueclub.domain.PriceRange;
import com.siat.blueclub.domain.Role;
import com.siat.blueclub.domain.Season;

@SpringBootTest
public class RepositoryTest {

	@Autowired
	private MemberRepository memberRepository;
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private ProCategoryRepository proCategoryRepository;
	@Autowired
	private AgeRepository ageRepository;
	@Autowired
	private ColorRepository colorRepository;
	@Autowired
	private GenderRepository genderRepository;
	@Autowired
	private MaterialRepository materialRepository;
	@Autowired
	private PriceRangeRepository priceRangeRepository;
	@Autowired
	private SeasonRepository seasonRepository;
	
	@Autowired
	private RequestRepository requestRepository;
	@Autowired
	private RequestSateRepository requestSateRepository;
	
	
	@Test
	public void memTest() {
		Role code0 = new Role();
		code0.setRoleCode(0);
		code0.setRoleName("admin");
		roleRepository.save(code0);
		Role code1 = new Role();
		code1.setRoleCode(1);
		code1.setRoleName("user");
		roleRepository.save(code1);
		
		Member mem1 = new Member();
		mem1.setMemID("admin");
		mem1.setMemRole(code0);
		memberRepository.save(mem1);
		Member mem2 = new Member();
		mem2.setMemID("user1");
		mem2.setMemRole(code1);
		memberRepository.save(mem2);
		Member mem3 = new Member();
		mem3.setMemID("user2");
		mem3.setMemRole(code1);
		memberRepository.save(mem3);
		Member mem4 = new Member();
		mem4.setMemID("user3");
		mem4.setMemRole(code1);
		memberRepository.save(mem4);
		
		List<Member> memList = (List<Member>) memberRepository.findAll();
		System.out.println("======");
		for(Member i : memList) System.out.println(i.toString());
		System.out.println("======");
	
		int pk = 0;
		
		String[] genderList = {"남자", "여자"," 유니섹스"};
		for(String i : genderList ) {
			Gender gender = new Gender();
			gender.setGenderCode(pk);
			gender.setGenderName(i);
			genderRepository.save(gender);
			pk++;
		}
		pk = 0;
		
		String[] colorList = {"화이트", "그레이", "블랙","레드", "핑크", "오렌지", "아이보리", "옐로우", "초록", "민트", "블루", "네이비", "퍼플", "브라운", "베이지", "스프라이트", "도트", "체크", "기타"};
		for (String i : colorList) {
			Color color = new Color();
			color.setColorCode(pk);
			color.setColorName(i);
			colorRepository.save(color);
			pk++;
		}
		pk = 0;
		
		String[] materialList = {"면", "린넨", "폴리에스테르", "니트", "퍼", "트위드", "나일론", "데님", "가죽", "스웨이드", "벨벳", "쉬폰", "실크", "코듀로이", "메탈릭", "기타"};
		for(String i : materialList) {
			Material material = new Material();
			material.setMaterialCode(pk);
			material.setMaterialName(i);
			materialRepository.save(material);
			pk++;
		}
		pk = 0;
		
		String[] seasonList = {"봄", "여름","가을", "겨울", "기타"};
		for(String i : seasonList) {
			Season season = new Season();
			season.setSeasonCode(pk);
			season.setSeasonName(i);
			seasonRepository.save(season);
			pk++;
		}
		pk = 0;
		
		String[] priaceRangeList = {"~ 2만원", "2 ~ 4만원", "4 ~ 6만원", "6 ~ 9만원", "9만원 ~"};
		for(String i : priaceRangeList) {
			PriceRange priceRange = new PriceRange();
			priceRange.setPriceRangeCode(pk);
			priceRange.setPriceRangeName(i);
			priceRangeRepository.save(priceRange);
			pk++;
		}
		pk = 0;
		
		String[] ageList = {"유아", "아동", "청소년", "성인"};
		for(String i : ageList) {
			Age age = new Age();
			age.setAgeCode(pk);
			age.setAgeName(i);
			ageRepository.save(age);
			pk++;
		}
		
		pk = 100;
		String[] upper = {"반소매", "민소매", "긴소매", "셔츠", "블라우스", "피케/카라", "맨투맨", "스웨트", "후드", "니트/스웨터", "기타"};
		for(String i : upper) {
			ProCategory category = new ProCategory();
			pk++;
			category.setCategoryCode(pk);
			category.setCategoryLargeName("상의");
			category.setCategorySmallName(i);
			proCategoryRepository.save(category);
		}
		
		pk = 200;
		String[] lowwer = {"데님", "숏", "코튼", "레깅스", "수트/슬랙스", "점프수트/오버올", "트레이닝/조거 팬츠", "기타"};
		for(String i : lowwer) {
			ProCategory category = new ProCategory();
			pk++;
			category.setCategoryCode(pk);
			category.setCategoryLargeName("바지");
			category.setCategorySmallName(i);
			proCategoryRepository.save(category);
		}
		
		pk = 300;
		String[] skirt = {"미니스커트", "미디스커트", "롱스커트"};
		for(String i : skirt) {
			ProCategory category = new ProCategory();
			pk++;
			category.setCategoryCode(pk);
			category.setCategoryLargeName("치마");
			category.setCategorySmallName(i);
			proCategoryRepository.save(category);
		}
		
		pk = 400;
		String[] shoes = {"구두", "샌들", "로퍼", "슬리퍼", "힐", "스니커즈", "플랫슈즈" , "블로퍼", "부츠", "기타"};
		for(String i : shoes) {
			ProCategory category = new ProCategory();
			pk++;
			category.setCategoryCode(pk);
			category.setCategoryLargeName("신발");
			category.setCategorySmallName(i);
			proCategoryRepository.save(category);
		}
		
		pk = 500;
		String[] hat = {"캡/야구", "버킷/사파리햇", "헌팅캡/베레모", "비니", "페도라", "트루퍼", "기타"};
		for(String i : hat) {
			ProCategory category = new ProCategory();
			pk++;
			category.setCategoryCode(pk);
			category.setCategoryLargeName("모자");
			category.setCategorySmallName(i);
			proCategoryRepository.save(category);
		}
		
		
		Product sample1 = new Product();
		sample1.setProName("sample1");
		sample1.setProCategory(proCategoryRepository.findByCategorySmallName("반소매").get());
		sample1.setProAge(ageRepository.findByAgeName("성인").get());
		productRepository.save(sample1);
		Product sample2 = new Product();
		sample2.setProName("sample2");
		sample2.setProCategory(proCategoryRepository.findByCategorySmallName("긴소매").get());
		sample2.setProAge(ageRepository.findByAgeName("청소년").get());
		productRepository.save(sample2);
		Product sample3 = new Product();
		sample3.setProName("sample3");
		sample3.setProCategory(proCategoryRepository.findByCategorySmallName("비니").get());
		sample3.setProAge(ageRepository.findByAgeName("유아").get());
		productRepository.save(sample3);
		Product sample4 = new Product();
		sample4.setProName("sample4");
		sample4.setProCategory(proCategoryRepository.findByCategorySmallName("반소매").get());
		sample4.setProAge(ageRepository.findByAgeName("성인").get());
		productRepository.save(sample4);
		
		List<Product> list = (List<Product>) productRepository.findAll();
		System.out.println("======");
		for(Product i : list) System.out.println(i.toString());
		System.out.println("======");
	
		RequestState ordercode0 = new RequestState(0, "주문확인중");
		requestSateRepository.save(ordercode0);
		RequestState ordercode1 = new RequestState(1, "주문확인");
		requestSateRepository.save(ordercode1);
		RequestState ordercode2 = new RequestState(2, "배송중");
		requestSateRepository.save(ordercode2);
		RequestState ordercode3 = new RequestState(3, "배송완료");
		requestSateRepository.save(ordercode3);
		RequestState ordercode4 = new RequestState(4, "주문완료");
		requestSateRepository.save(ordercode4);
		
		Request testOrder1 = new Request();
		testOrder1.setMemID(memberRepository.findById("user1").get());
		testOrder1.setProCode(productRepository.findByProName("sample1").get());
		testOrder1.setRequestStateCode(requestSateRepository.findByRequestStateName("주문확인중").get());
		testOrder1.setRequestDate(new Date());
		requestRepository.save(testOrder1);
		
		
		
	}
}
