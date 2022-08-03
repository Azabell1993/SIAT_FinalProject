# TEAM : Blue Club
- 개인 웹 쇼핑몰 Site
- 핵심은 '추천 알고리즘'

1) 아이템 : 모의 의류 상품 판매의 일반 기능을 기반 쇼핑몰. 
2) 핵심 기술 : 유사어 기능을 적용한 다양한 상품 검색. 
3) 고객 패턴 분석 : 고객의 쇼핑 행동 분석에 따른 다양한 방법(회원, 비회원, 선호도를 통한 인기 상품)을 적용한 패턴 분석(추천 알고리즘 코사인 유사도). 
4) 가변 화면 정보 : 접속자의 패턴 분석에 따른 가변적인 화면 구성  

## 개발일정
2022년 07월 14일 :
팀원들 업무 장비, IDE 체크, 개발 환경 지정, (데이터베이스, 유스케이스 다이어그램, 클래스) 설계
2022년 07월 21일 :
  1. JPA를 이용한 DB 구현 : 제4정규화에 따른 무결성을 보전 및 추천 알고리즘에 의한 속성(숫자값) 부여
  2. Vue.js를 이용한 기본 화면 구현, Axios를 이용한 백엔드와 프론트엔드 양방향 통신 성공.
  3. 초기 계획은 타입스크립트였으나 팀원내 언어 통일과 안전성 확보를 위해 자바스크립트로 대체함.
2022년 08월 2일 :
추천알고리즘에 의해 유저마다 다른 화면이 동적으로 구현되는 핵심 기능 구현 완료.
  1. 구현 완료 : 로그인, 회원가입(정규식 패턴 적용완료), 회원탈퇴, 회원정보수정, 상품등록페이지
  2. 미구현 : 관리자 페이지 - 회원관리 페이지, 구매하기, 상품리뷰 페이지
  
# SIAT_FinalProject
- siat full stack sw developer education
- this repo is final project 

## project team
|이름|팀원 역할|씨앗 내 범용성|깃 허브|
|------|---|---|---|
|박지우|팀장|(시스템,웹)풀 스택|https://github.com/Azabell1993|
|이대관|프론트엔드 팀원|프론트 엔드|https://github.com/CodingBeginnerLDK|
|채희상|백엔드 팀원|백엔드|https://github.com/ds3569|
|김호중|CSS 적용 팀원|디자인|https://github.com/HeartByte|


## 팀원 소개
|이름|개발 특기사항|개발 특기언어|
|------|---|---|
|박지우|system개발|C언어|
|이대관|Web개발|java|
|채희상|Web개발|java|
|김호중|-|-|


# 팀장의 C언어 ==> WebAssembly ==> Web 모듈 프론트엔드로의 연결을 테스트한 레포지토리(아직 적용예정은 없지만 나중에 따로 BASE64구현을 해보기 위해 만든 번외 파트입니다.)
[예제보기](https://github.com/Azabell1993/SIAT_FinalProject/tree/main/TeamLeader_Pratice_Test_Workspace/WEBASSEMBLY/TEST_JS_exam01/Suceess_)
- Frontend, Backend에 있어서 WEB 서비스 전반에 사용할 엔진을 설계하고 구현할 방법을 C언어를 통해 설계하고자 하고 기반을 닦았습니다.
- C언어로 객체를 구현하였으며 캡슐화와 메모리 해제등이 객체지향 기반의 고급언어와 유사하게 적성되어 있습니다.
- C언어를 통해 WebAssembly로 변환후 *.wasm으로 변환하였기 때문에 코드의 기밀성이 유지하는 데에 있어서 도움이 되지만 이 프로젝트는 연습이므로 공개를 하겠습니다.
- 팀장의 단독적인 크로스 플랫폼을 위한 연습입니다.
> * Frontend:C ↔ WebAssembly ↔  Javascript/Typescript  
> * Backend:C ↔ WebAssembly ↔  Java  
  
![스크린샷_2022-07-11_오후_10 40 40](https://user-images.githubusercontent.com/75885992/178281238-887bc9ab-0f7b-4b8a-99da-fdb693c74f98.png)  
  

# DB 설계
![DB](https://user-images.githubusercontent.com/75885992/177923822-d4089267-5d6e-4448-8d25-7dd9e84974c9.png)


# 팀원 각 개발파트 분담
|이름|개발파트|기타|
|------|---|---|
|박지우|프론트엔드|JavaScript, Vue|
|이대관|프론트엔드|JavaScript, Vue|
|채희상|백엔드|Java, Spring|
|김호중|CSS|-|

