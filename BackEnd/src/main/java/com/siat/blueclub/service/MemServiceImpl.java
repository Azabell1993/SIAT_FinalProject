package com.siat.blueclub.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.siat.blueclub.domain.Member;
import com.siat.blueclub.domain.Role;
import com.siat.blueclub.persistence.MemberRepository;
import com.siat.blueclub.persistence.RoleRepository;

@Service
public class MemServiceImpl implements MemService {

	@Autowired
	private MemberRepository memberRepository;
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public boolean loginCheck(Member mem) { // 로그인
		Optional<Member> optional = memberRepository.findById(mem.getMemID());
		if (optional.isEmpty()) { // 입력된 아이디가 없을 경우 실패
			return false;
		} else {
			if (optional.get().getMemPW().equals(mem.getMemPW())) { // 입력된 아이디가 있을 경우 비밀번호 확인
				return true; // 비밀번호가 같을 경우 성공
			}
			return false;
		}
	}

	@Override
	public Member getMem(Member mem) { // 아이디 기반 멤버 정보 가져오기
		return memberRepository.findById(mem.getMemID()).get();
	}

	@Override
	public boolean idCheck(Member mem) { // 아이디 중복 체크
		if (memberRepository.findById(mem.getMemID()).isEmpty()) { // 해당하는 아이디가 없을 시
			return false; // false 반환
		} else { // 해당하는 아이디가 있을 시
			return true; // true 반환
		}
	}

	@Override
	public boolean signUp(Member mem) { // 회원가입
		mem.setMemRole(roleRepository.findById(1).get()); // 멤버 role 기본(user)설정
		mem.setMemDate(new Date()); // 회원 가입 일자 설정
		if (memberRepository.findById(mem.getMemID()).isEmpty()) { // 해당하는 아이디가 존재하나 체크
			memberRepository.save(mem); // 데이터 저장
			if (memberRepository.findById(mem.getMemID()).isEmpty()) { // 해당하는 아이디로 저장되 잘 되었는지 체크
				return false; // 회원 가입 실패 -> 정보가 저장되지 않음
			} else {
				return true; // 회원가입 성공
			}
		} else {
			return false; // 회원가입 실패 -> 중복된 아이디
		}
	}

	@Override
	public boolean update(Member mem) { // 회원 정보 수정
		Optional<Member> optional = memberRepository.findById(mem.getMemID());
		if (optional.isEmpty()) { // 해당 회원이 존재하는지 체크
			return false; // 회원이 존제하지 않으므로 회원 정보 수정 실패, false 반환
		} else {
			Member origin = optional.get();
			mem.setMemDate(origin.getMemDate());
			mem.setMemRole(origin.getMemRole()); //수정되지 않는 정보 세팅
			
			if(mem.getMemAddr().isEmpty()) {
				mem.setMemAddr(origin.getMemAddr());
			}
			if(ObjectUtils.isEmpty(mem.getMemBirth())) {
				mem.setMemBirth(origin.getMemBirth());
			}
			if(mem.getMemEmail().isEmpty()) {
				mem.setMemEmail(origin.getMemEmail());
			}
			if(mem.getMemName().isEmpty()) {
				mem.setMemName(origin.getMemName());
			}
			if(mem.getMemPhone().isEmpty()) {
				mem.setMemPhone(origin.getMemPhone());
			}
			if(mem.getMemPW().isEmpty()) {
				mem.setMemPW(origin.getMemPW());
			}
			
			memberRepository.save(mem); // 회원 정보 수정
			return true; // 회원 정보 수정 성공, true 반환
		}
	}

	@Override
	public boolean deleteProc(Member mem) { // 회원 탈퇴
		if (memberRepository.findById(mem.getMemID()).isEmpty()) { // 해당 회원이 존재하는지 체크
			return false; // 회원이 존재하지 않으므로 회원 탈퇴 실패, false 반환
		} else {
			memberRepository.deleteById(mem.getMemID()); // 회원 탈퇴
			return true; // 회원 탈퇴 성공, true 반환
		}
	}

	@Override
	public void changeRoleProc(String memID, String roleName) { // 회원 role 수정
		Member member = memberRepository.findById(memID).get(); // 해당하는 member 객체 불러오기
		Optional<Role> optional = roleRepository.findByRoleName(roleName); // 해당하는 role 객체 불러오기
		member.setMemRole(optional.get());
		memberRepository.save(member);
	}

	@Override
	public List<Role> roleInfo() { //role 정보
		return (List<Role>) roleRepository.findAll();
	}
	
	@Override
	public Member memberInfo(String memID) { //Member 정보
		return memberRepository.findById(memID).get();
	}

	/* Member ID 전체 불러오기 */
	@Override
	public List<Member> everyMemberInfo() { //Member 정보
		return (List<Member>) memberRepository.findAll();
	}

}
