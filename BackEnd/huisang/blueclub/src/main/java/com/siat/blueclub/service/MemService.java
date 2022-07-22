package com.siat.blueclub.service;

import com.siat.blueclub.domain.Member;

public interface MemService {

	boolean loginCheck(Member mem);

	Member getMem(Member mem);

	boolean idCheck(Member mem);

	boolean signUp(Member mem);

}
