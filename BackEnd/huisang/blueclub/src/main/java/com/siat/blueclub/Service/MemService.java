package com.siat.blueclub.Service;

import com.siat.blueclub.domain.Member;

public interface MemService {

	boolean loginCheck(Member mem);

	Member getMem(Member mem);

	boolean idCheck(String memID);

	boolean signUp(Member mem);

}
