package com.siat.blueclub.Service;

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
	public boolean loginCheck(Member mem) {

		if (memberRepository.findById(mem.getMemID()).isEmpty()) {
			return false;
		} else {
			if (memberRepository.findById(mem.getMemID()).get().getMemPW().equals(mem.getMemPW())) {
				return true;
			}
			return false;
		}
	}

	@Override
	public Member getMem(Member mem) {
		Member result = memberRepository.findById(mem.getMemID()).get();
		return result;
	}

	@Override
	public boolean idCheck(String memID) {
		if (memberRepository.findById(memID).isEmpty()) {
			return false;
		} else {

			return false;
		}
	}

	@Override
	public boolean signUp(Member mem) {
		memberRepository.save(mem);
		if (memberRepository.findById(mem.getMemID()).isEmpty()) {
			return false;
		} else {
			return false;
		}
	}

}
