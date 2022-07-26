package com.siat.blueclub.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siat.blueclub.domain.Member;
import com.siat.blueclub.persistence.MemberRepository;
import com.siat.blueclub.persistence.RoleRepository;

@Service
public class MemServiceImpl implements MemService {

	@Autowired
	private MemberRepository memberRepository;
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public boolean loginCheck(Member mem) { //로그인
		if (memberRepository.findById(mem.getMemID()).isEmpty()) { //입력된 아이디가 없을 경우 실패
			return false;
		} else {
			if (memberRepository.findById(mem.getMemID()).get().getMemPW().equals(mem.getMemPW())) { //입력된 아이디가 있을 경우 비밀번호 확인
				return true; //비밀번호가 같을 경우 성공
			}
			return false;
		}
	}

	@Override
	public Member getMem(Member mem) { //아이디 기반 멤버 정보 가져오기
		return memberRepository.findById(mem.getMemID()).get();
	}

	@Override
	public boolean idCheck(Member mem) { //아이디 중복 체크
		if (memberRepository.findById(mem.getMemID()).isEmpty()) { //해당하는 아이디가 없을 시
			return false; //false 반환
		} else { //해당하는 아이디가 있을 시
			return true; //true 반환
		}
	}

	@Override
	public boolean signUp(Member mem) { //회원가입
		mem.setMemRole(roleRepository.findById(1).get()); //멤버 role 기본(user)설정
		mem.setMemDate(new Date()); //회원 가입 일자 설정
		if (memberRepository.findById(mem.getMemID()).isEmpty()) { //해당하는 아이디가 존재하나 체크
			memberRepository.save(mem); //데이터 저장
			if (memberRepository.findById(mem.getMemID()).isEmpty()) { //해당하는 아이디로 저장되 잘 되었는지 체크
				return false; //회원 가입 실패 -> 정보가 저장되지 않음
			} else{
			return true; // 회원가입 성공
			}
		} else {
			return false; //회원가입 실패 -> 중복된 아이디
		}
	}

}
