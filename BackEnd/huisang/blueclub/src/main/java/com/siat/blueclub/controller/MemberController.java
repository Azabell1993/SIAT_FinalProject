package com.siat.blueclub.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.siat.blueclub.domain.Member;
import com.siat.blueclub.domain.Role;
import com.siat.blueclub.service.MemService;

@Controller
@RequestMapping("/mem")
public class MemberController {
	
	@Autowired
	private MemService memService;

	@CrossOrigin
	@PostMapping("loginProc")
	@ResponseBody
	public Map<String, Object> loginProc(@RequestBody Member mem, HttpServletRequest req) { //로그인
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | loginProc | " + mem.toString());
		if( memService.loginCheck(mem) ) { //로그인 서비스 호출
			data.put("data", "true"); //로그인 성공 시 true 전송
			data.put("mem", memService.getMem(mem)); //로그인 성공시 멤버 정보 전송
		} else { 
			data.put("data", "false"); //로그인 실패 시 false 전송
			data.put("mem", null); //로그인 실패 시 멤버 정보 전송하지 않음
			}
		return data;
	}	
	@CrossOrigin
	@PostMapping("idCheckProc")
	@ResponseBody
	public Map<String, Object> idCheckProc(@RequestBody Member mem, HttpServletRequest req) { //아이디 중복체크
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | idCheckProc | " + mem.toString());
		if (memService.idCheck(mem)) { //아이디 중복 체크 서비스 호출 -> 해당하는 아이디가 있을 시
			data.put("data", "true"); //true 전송
		} else { //해당하는 아이디가 없을 시
			data.put("data", "false"); //false 전송
		}
		return data;
	}
	@CrossOrigin
	@PostMapping("signUpProc")
	@ResponseBody
	public Map<String, Object> signUpProc(@RequestBody Member mem, HttpServletRequest req) { //회원가입
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | singUpProc | " + mem.toString());
		if(memService.signUp(mem)) { //회원가입 서비스 호출 -> 회원가입 성공 시
			data.put("data", "true"); //true 전송
		} else { //회원가입 실패 시
			data.put("data", "false"); //false 전송
		}
		
		return data;
	}
	@CrossOrigin
	@PostMapping("updateProc")
	@ResponseBody
	public Map<String, Object> updateProc(@RequestBody Member mem, HttpServletRequest req) { //회원 정보 수정
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + " | updateProc | " + mem.toString());
		if(memService.update(mem)) { //회원 정보 수정 서비스 호출 -> 회원 정보 수정 성공 시
			data.put("data", "true"); //true 전송
		} else { //회원가입 실패 시
			data.put("data", "false"); //false 전송
		}
		
		return data;
	}	
	@CrossOrigin
	@PostMapping("deleteProc")
	@ResponseBody
	public Map<String, Object> deleteProc(@RequestBody Member mem, HttpServletRequest req) { //회원 탈퇴
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + "| deleteProc | " + mem.toString());
		if(memService.deleteProc(mem)) { //회원 탈퇴 서비스 호출 -> 회원 탈퇴 성공 시
			data.put("data", "true"); //true 전송
		} else { //회원가입 실패 시
			data.put("data", "false"); //false 전송
		}
		
		return data;
	}
	@CrossOrigin
	@PostMapping("memberInfo")
	@ResponseBody
	public Map<String, Object> memberInfo(@RequestBody Member memID, HttpServletRequest req) { //Member 정보
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + "| memberInfo");
		Member member = memService.memberInfo(memID.getMemID());
		data.put("data", member);
		return data;
	}
	@CrossOrigin
	@PostMapping("changeRoleProc")
	@ResponseBody
	public Map<String, Object> changeRoleProc(@RequestBody Map<String, Object> idAndRole, HttpServletRequest req) { //회원 정보 수정
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + "| deleteProc | " + idAndRole.toString());
		String memID = (String) idAndRole.get("memID");
		String roleName = (String) idAndRole.get("roleName");
		memService.changeRoleProc(memID, roleName); //회원 정보 수정 서비스 호출
		data.put("data", "true"); //true 전송 -> 반드시 성공 -> 데이터를 모두 db에서 받아 처리했기 때문
		
		return data;
	}
	@CrossOrigin
	@PostMapping("roleInfo")
	@ResponseBody
	public Map<String, Object> roleInfo(HttpServletRequest req) { //role 정보
		Map<String, Object> data = new HashMap<>();
		String ip = req.getHeader("X-Forwarded-For");
		if (ip == null) {
			ip = req.getRemoteAddr();
		}
		System.out.println(new Date() + " | " + ip + "| roleInfo");
		
		List<Role> list = memService.roleInfo(); 
		data.put("data", list);
		
		return data;
	}
	
}
