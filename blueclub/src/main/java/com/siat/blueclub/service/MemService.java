package com.siat.blueclub.service;


import java.util.List;

import com.siat.blueclub.domain.Member;
import com.siat.blueclub.domain.Role;

public interface MemService {

	public boolean loginCheck(Member mem); //로그인

	public Member getMem(Member mem); //아이디 기반 멤버 정보 가져오기

	public boolean idCheck(Member mem); //아이디 중복 체크

	public boolean signUp(Member mem); //회원가입

	public boolean update(Member mem); //회원 정보 수정

	public boolean deleteProc(Member mem); //회원 탈퇴

	public void changeRoleProc(String memID, String roleName); //회원 role 수정

	public List<Role> roleInfo(); //role 정보

	public Member memberInfo(String memID); //Member 정보

	public List<Member> everyMemberInfo();

}
