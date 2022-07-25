package com.siat.blueclub.service;

import com.siat.blueclub.domain.Member;

public interface MemService {

	boolean loginCheck(Member mem); //로그인

	Member getMem(Member mem); //아이디 기반 멤버 정보 가져오기

	boolean idCheck(Member mem); //아이디 중복 체크

	boolean signUp(Member mem); //회원가입

}
