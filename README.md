# TEAM : Blue Club (MINI PROJECT)  
- 개인 웹 쇼핑몰 SITE  
- 핵심은 '추천 알고리즘 ==> '아이템 기반 협업 필터링 알고리즘을 사용해 추천 알고리즘을 구현

1) 아이템 : 모의 의류 상품 판매의 일반 기능을 기반 쇼핑몰. 
2) 핵심 기술 : 유사어 기능을 적용한 다양한 상품 검색. 
3) 고객 패턴 분석 : 고객의 쇼핑 행동 분석에 따른 다양한 방법(회원, 비회원, 선호도를 통한 인기 상품)을 적용한 패턴 분석(추천 알고리즘 코사인 유사도). 
4) 가변 화면 정보 : 접속자의 패턴 분석에 따른 가변적인 화면 구성  
   
## 블루클럽 - 씨앗 팀원 소개
|이름|개발 특기사항|개발 특기언어|특이사항|
|------|---|---|---|
|박지우|system개발|C언어|printf 같은 내장함수, 객체지향을 비롯한 패러다임 구현 기술이 있다.|
|이대관|Web개발|js|블루클럽에서 js를 특기언어로 승화시켰다.|
|채희상|Web개발|java|JPA를 활용하여 주어진 문제를 잘 해결할 수 있다.|
|김호중|Web개발|java|SpringBoot의 특성을 파악하고 Entity Test 코드를 잘 작성하였다.|
    
## 팀원 기여도
|이름|개발 담당|씨앗 내 범용성|기여도|깃 허브|
|------|---|---|---|---|
|박지우|프론트 엔드 개발|(시스템, 웹) 풀 스택|프론트 엔드 로직 주 개발 기여|https://github.com/Azabell1993|
|이대관|프론트엔드-디자인|프론트 엔드|이미지 동적 화면, 디자인 적용 기여|https://github.com/CodingBeginnerLDK|
|채희상|백엔드-로직|백엔드|JPA 주 개발 기여|https://github.com/ds3569|
|김호중|DB-Entity Test|백엔드|Entity 테스트 코드 기여|https://github.com/HeartByte|
  
### 프로젝트 1주차 이슈  
- 프로젝트 주제 선정  
의료 쇼핑몰  
  
- 프로젝트 업무 분장  
Frontend   
주 : 박지우  
부 1 : 이대관  
부 2 : 채희상  
부 3 : 김호중  
디자인  
주 : 이대관  
부 1 : 김호중  
부 2 : 박지우  
부 3 : 채희상  
Backend  
주 : 채희상  
부 1 : 박지우  
부 2 : 김호중  
부 3 : 이대관  
DataBase  
주 : 김호중  
부 1 : 채희상  
부 2 : 이대관  
부 3 : 박지우  
  
- 팀명 선정  
블루클럽  
  
- 개발 스케줄  
1주차 : 주제 선정 및 요구사항 명세 도출  
2주차 : DataBase 설계, 클래스 설계, 화면 설계  
3주차 : CI, CD 정의, DataBase 구현 및 연동, 화면 기능 구현  
4주차 : 추천 알고리즘 구현, 화면 디자인 적용  
  
- 요구사항 명세 도출  
상품 추천 알고리즘 (핵심)  
회원 가입 및 로그인  
회원 정보 관리  
상품 주문  
상품 관리  
주문 관리  
공지사항  
QnA 게시판  
상품 리뷰  
  
- 요구사항 해결 방안  
아이템 기반 협업 필터링 알고리즘  
사용자 조회 상품 Cookie 기록  
  
- 테스트 범위  
회원 가입 및 로그인  
추천 상품 조회  
상품 주문  
상품 등록  
회원 정보 관리  
  
### 프로젝트 2주차 이슈  
- DateBase 설계  
<img width="1493" alt="다이아그램" src="https://user-images.githubusercontent.com/75885992/183022686-e4c9ba5e-8dda-40a8-9ae4-0cfb93298b45.png">  
> JPA Libary를 사용헤 DB 구현  
https://github.com/Azabell1993/SIAT_FinalProject/blob/7689415ca55b515bafaef0de09ae639e8ebbefb9/BackEnd/src/main/java/com/siat/blueclub/domain/Product.java#L23-L54  
  
제 3 정규화까지 설계  
- 클래스 설계  
MVC 패턴  
- 화면 설계  
VueJS  
  
### 프로젝트 3주차 이슈  
1. CI, CD 정의   
a) GitHub를 통해 CI.  
b) AWS를 통해 CD.  
  
2. DataBase 구현   
JPA(Oracle)를 사용해 구현. 
  
3. DataBase 연동  
HikariCP. 
  
4. 화면 기능 구현  
a) 로그인.  
b) 회원가입.  
c) 회원 정보 수정.  
d) 회원 탈퇴.  
e) 상품 등록 (이미지 제외).  
f) 상품 목록 (이미지 제외).  
g) 카테고리 네비게이션.  
  
5. 추천 알고리즘 구현  
a) VueX를 Cookie 처럼 사용.   
b) 사용자가 조회한 상품 목록을 기준으로 추천 알고리즘 적용.  
  
### 프로젝트 4주차 이슈  
1. 추천 알고리즘 수정  
a) 사용자가 조회한 상품 목록이 항상 동일.  
b) 로그인 한 유저가 조회한 상품목록을 DataBase에 저장.  
  
2. 화면 기능 구현  
a) 상품 등록 (이미지 포함).  
b) 상품 목록 (이미지 포함).  
c) 상품 주문 (장바구니).  
d) 회원 관리.  
  
3. 디자인 적용   
BootStrap 사용해 직접 구현  
  
4. 발표자료 작성   
a) 08.03 중간 발표   
b) 08.05 최종 발표   

### 기능 미구현  
1. 상품 검색 기능  
2. 상품 리뷰 기능  
3. 배송 시스템 구축  
  

#    
# 완성 이미지 샘플  
#    
### 사용자 별로 아이템 순서가 다르게 보여진다.     
![main](https://user-images.githubusercontent.com/75885992/183018932-21ad5e94-1398-4fb9-b6db-2db9fe863d9e.png)  
  
### 회원가입 화면.  
![signup2](https://user-images.githubusercontent.com/75885992/183019556-55b7a8b8-c106-4501-a6be-70a6e5dccb41.png)  
  
### 로그인 화면.
![login](https://user-images.githubusercontent.com/75885992/183018955-4848ea33-467a-4d30-a116-fc71641dabab.png)  
  
### 소분류 카테고리 화면.  
![main2](https://user-images.githubusercontent.com/75885992/183018995-962ee149-2b13-4149-9244-f7ee753352ee.png)  
  
### 제품 구매 화면.  
<img width="1909" alt="제품구매1" src="https://user-images.githubusercontent.com/75885992/183021973-d8f920e2-284f-4579-89c3-a2117bf23b7b.png">  
<img width="1892" alt="제품구매2" src="https://user-images.githubusercontent.com/75885992/183022029-536f1f51-e3cf-48d3-befe-c6c56d108a0a.png">  
 
  
### 장바구니 화면.  
<img width="1917" alt="장바구니" src="https://user-images.githubusercontent.com/75885992/183022078-44c1470d-0084-4f3e-9bf7-032355cd8141.png">  
  
### 관리자의 상품등록 페이지 화면.  
![addProduct](https://user-images.githubusercontent.com/75885992/183019059-7bfc02e6-cd06-4d5f-9afa-9ffa2a15d906.png)  
    
### 회원 관리 페이지 화면.  
![회원관리](https://user-images.githubusercontent.com/75885992/183022156-8c203fa3-4bab-4db9-b627-b9ca4335657f.png)  
   


  

