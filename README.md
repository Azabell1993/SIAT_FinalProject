# TEAM : Blue Club
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
|김호중|Web개발|java|-|
  
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
![DB](https://user-images.githubusercontent.com/75885992/177923822-d4089267-5d6e-4448-8d25-7dd9e84974c9.png)  
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
  
## project team
|이름|개발 담당|씨앗 내 범용성|깃 허브|
|------|---|---|---|
|박지우|프론트 엔드 개발|(시스템, 웹) 풀 스택|https://github.com/Azabell1993|
|이대관|프론트엔드-디자인|프론트 엔드|https://github.com/CodingBeginnerLDK|
|채희상|백엔드-로직|백엔드|https://github.com/ds3569|
|김호중|DB-Entity Test|백엔드|https://github.com/HeartByte|


# C언어 ==> WebAssembly ==> Web   
(아직 적용예정은 없지만 나중에 따로 BASE64구현 및 엔진 개발을 해보기 위해 만든 번외 파트입니다.)  
[HTML 적용 예제보기]
https://github.com/Azabell1993/SIAT_FinalProject/blob/84f24f1217951eafda6c4ec328bea03f7ca5b644/TeamLeader_Pratice_Test_Workspace/WEBASSEMBLY/TEST_JS_exam01/Suceess_/index.html#L29  
  
[C언어 덧셈 객체 코드 예제보기]  
https://github.com/Azabell1993/SIAT_FinalProject/blob/f6093cd5acd9b15e4fb4740571379058b1544a61/TeamLeader_Pratice_Test_Workspace/C/addFunction.h#L14-L77
  
- Frontend, Backend에 있어서 WEB 서비스 전반에 사용할 엔진을 설계하고 구현할 방법을 C언어를 통해 설계하고자 하고 기반을 닦았습니다.
- C언어로 객체를 구현하였으며 캡슐화와 메모리 해제등이 객체지향 기반의 고급언어와 유사하게 적성되어 있습니다.
- C언어를 통해 WebAssembly로 변환후 *.wasm으로 변환하였기 때문에 코드의 기밀성이 유지하는 데에 있어서 도움이 되지만 이 프로젝트는 연습이므로 공개를 하겠습니다.
- 팀장의 단독적인 크로스 플랫폼을 위한 연습입니다.
> * Frontend:C ↔ WebAssembly ↔  Javascript/Typescript  
> * Backend:C ↔ WebAssembly ↔  Java  
  
![스크린샷_2022-07-11_오후_10 40 40](https://user-images.githubusercontent.com/75885992/178281238-887bc9ab-0f7b-4b8a-99da-fdb693c74f98.png)  

