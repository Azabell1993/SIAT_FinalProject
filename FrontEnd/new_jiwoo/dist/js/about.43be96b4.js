"use strict";(self["webpackChunknew_project"]=self["webpackChunknew_project"]||[]).push([[443],{939:function(e,l,n){n.r(l),n.d(l,{default:function(){return f}});var m=n(3396),t=n(9242),i=n(7139);const a=(0,m._)("h1",null,"Login 페이지입니다.",-1),o={for:"memID"},s=(0,m.Uk)("ID : "),u=(0,m._)("br",null,null,-1),d=(0,m._)("br",null,null,-1),r={for:"memPW"},p=(0,m.Uk)("PW : "),c=(0,m._)("br",null,null,-1),h=(0,m._)("br",null,null,-1),g=(0,m._)("button",null,"Send",-1),_=(0,m._)("br",null,null,-1);function k(e,l,n,k,w,D){return(0,m.wg)(),(0,m.iD)("div",null,[a,(0,m._)("form",{onSubmit:l[2]||(l[2]=(0,t.iM)(((...e)=>D.sendPost&&D.sendPost(...e)),["prevent"]))},[(0,m._)("label",o,[s,(0,m.wy)((0,m._)("input",{id:"memID","onUpdate:modelValue":l[0]||(l[0]=e=>D.memID=e),type:"text"},null,512),[[t.nr,D.memID]])]),u,d,(0,m._)("label",r,[p,(0,m.wy)((0,m._)("input",{id:"memPW","onUpdate:modelValue":l[1]||(l[1]=l=>e.memPW=l),type:"password"},null,512),[[t.nr,e.memPW]])]),c,h,g,_,(0,m.Uk)((0,i.zw)(D.memID),1)],32)])}var w=n(6265),D=n.n(w),I=n(4239);D().defaults.headers.common["Access-Control-Allow-Origin"]="*";var b={computed:{memID:{get(){return I.Z.state.loginUser.memID},set(e){this.$store.commit("updateloginUserID",e)}}},methods:{sendPost(){const e=this.memID;console.log(e),D().post("http://192.168.0.81:9292/mem/loginProc",{memID:this.memID,memPW:this.memPW}).then((function(l){l.data.mem.memID==e&&(console.log("ID가 일치합니다."),location.href="http://localhost:8080/"),console.log(`login : ${I.Z.state.loginUser.memID}`)})).catch((function(){alert("ID 혹은 비밀번호가 틀렸습니다")})),console.log("end")}}},P=n(89);const V=(0,P.Z)(b,[["render",k]]);var f=V},6087:function(e,l,n){n.r(l),n.d(l,{default:function(){return H}});var m=n(3396),t=n(9242);const i={class:"container"},a=(0,m._)("div",null,[(0,m._)("h1",null,"Sign Up 페이지입니다.")],-1),o={for:"memID"},s=(0,m.Uk)("아이디 : "),u=(0,m._)("p",{id:"userid_msg"},null,-1),d={for:"memIDCheck"},r=(0,m.Uk)("아이디 확인 : "),p=(0,m._)("p",{id:"userid_msg"},null,-1),c={key:0},h=(0,m._)("button",null,"아이디 사용 가능 체크",-1),g=(0,m._)("p",null,"8 ~ 16자 대/소 영문, 숫자, 특수문자를 최소 한가지씩 조합하세요.",-1),_={for:"memPW"},k=(0,m.Uk)("비밀번호 : "),w=(0,m._)("br",null,null,-1),D={for:"memPWCheck"},I=(0,m.Uk)("비밀번호 확인 : "),b=(0,m._)("br",null,null,-1),P={key:0},V=(0,m._)("button",null,"비밀번호 체크",-1),f={for:"memName"},C=(0,m.Uk)("이름 : "),U=(0,m._)("br",null,null,-1),y={for:"memAddr"},W=(0,m.Uk)("주소 : "),v=(0,m._)("br",null,null,-1),A={for:"memPhone"},F=(0,m.Uk)("전화번호 : "),x=(0,m._)("br",null,null,-1),B={for:"memEmail"},Z=(0,m.Uk)("이메일 : "),S=(0,m._)("br",null,null,-1),E={for:"memBirth"},N=(0,m.Uk)("생년월일 : "),z=(0,m._)("br",null,null,-1),$=(0,m._)("input",{type:"reset",value:"초기화"},null,-1),j=(0,m._)("input",{type:"submit",id:"login_submit",value:"가입"},null,-1);function M(e,l,n,M,q,O){return(0,m.wg)(),(0,m.iD)("div",i,[a,(0,m._)("form",{action:"/SignTest",method:"get",class:"userjoin",onSubmit:l[4]||(l[4]=(0,t.iM)(((...e)=>O.checkId&&O.checkId(...e)),["prevent"]))},[(0,m._)("label",o,[s,(0,m.wy)((0,m._)("input",{type:"text",id:"memID","onUpdate:modelValue":l[0]||(l[0]=e=>q.signup.memID=e),mexlength:"20",onBlur:l[1]||(l[1]=(...e)=>O.idValid&&O.idValid(...e))},null,544),[[t.nr,q.signup.memID]]),u]),(0,m._)("label",d,[r,(0,m.wy)((0,m._)("input",{type:"text",id:"memIDCheck","onUpdate:modelValue":l[2]||(l[2]=e=>q.signup.memIDCheck=e),mexlength:"20",onBlur:l[3]||(l[3]=(...e)=>O.idCheckValid&&O.idCheckValid(...e))},null,544),[[t.nr,q.signup.memIDCheck]]),p]),q.idValidFlag?(0,m.kq)("",!0):((0,m.wg)(),(0,m.iD)("div",c,"유효하지 않은 아이디입니다.")),h],32),(0,m._)("form",{action:"/PwTest",method:"get",class:"userpwcheck",onSubmit:l[9]||(l[9]=(0,t.iM)(((...e)=>O.checkPw&&O.checkPw(...e)),["prevent"]))},[g,(0,m._)("label",_,[k,(0,m.wy)((0,m._)("input",{type:"password",id:"memPW","onUpdate:modelValue":l[5]||(l[5]=e=>q.signup.memPW=e),onBlur:l[6]||(l[6]=(...e)=>O.passwordValid&&O.passwordValid(...e))},null,544),[[t.nr,q.signup.memPW]])]),w,(0,m._)("label",D,[I,(0,m.wy)((0,m._)("input",{type:"password",id:"memPWCheck","onUpdate:modelValue":l[7]||(l[7]=e=>q.signup.memPWCheck=e),maxlength:"16",onBlur:l[8]||(l[8]=(...e)=>O.passwordCheckValid&&O.passwordCheckValid(...e))},null,544),[[t.nr,q.signup.memPWCheck]])]),b,q.passwordValidFlag?(0,m.kq)("",!0):((0,m.wg)(),(0,m.iD)("div",P,"유효하지 않은 비밀번호 입니다.")),V],32),(0,m._)("label",f,[C,(0,m.wy)((0,m._)("input",{type:"text",id:"memName","onUpdate:modelValue":l[10]||(l[10]=e=>q.signup.memName=e)},null,512),[[t.nr,q.signup.memName]])]),U,(0,m._)("label",y,[W,(0,m.wy)((0,m._)("input",{type:"text",id:"memAddr","onUpdate:modelValue":l[11]||(l[11]=e=>q.signup.memAddr=e)},null,512),[[t.nr,q.signup.memAddr]])]),v,(0,m._)("label",A,[F,(0,m.wy)((0,m._)("input",{type:"text",id:"memPhone","onUpdate:modelValue":l[12]||(l[12]=e=>q.signup.memPhone=e)},null,512),[[t.nr,q.signup.memPhone]])]),x,(0,m._)("label",B,[Z,(0,m.wy)((0,m._)("input",{type:"email",id:"memEmail","onUpdate:modelValue":l[13]||(l[13]=e=>q.signup.memEmail=e)},null,512),[[t.nr,q.signup.memEmail]])]),S,(0,m._)("label",E,[N,(0,m.wy)((0,m._)("input",{type:"date",id:"memBirth","onUpdate:modelValue":l[14]||(l[14]=e=>q.signup.memBirth=e)},null,512),[[t.nr,q.signup.memBirth]])]),z,$,j])}var q=n(6265),O=n.n(q);O().defaults.headers.common["Access-Control-Allow-Origin"]="*";var T={data(){return{signup:{memID:null,memIDCheck:null,memPW:null,memPWCheck:null,memName:"",memAddr:"",memPhone:"",memEmail:"",memBirth:""},idValidFlag:!0,passwordValidFlag:!0,idCheck:"",passwordCheck:""}},methods:{idValid(){/^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/.test(this.signup.memID)?this.idValidFlag=!0:this.idValidFlag=!1},idCheckValid(){this.signup.memID===this.idCheck?this.idCheck=!0:this.idCheck=!1},passwordValid(){/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.signup.memPW)?this.passwordValidFlag=!0:this.passwordValidFlag=!1},passwordCheckValid(){this.signup.memPW===this.passwordCheck?this.passwordCheckFlag=!0:this.passwordCheckFlag=!1},checkId(){console.log("ID test"),this.idValidFlag?O().post("http://192.168.0.81:9292/mem/idCheckProc",{memID:this.signup.memID}).then((function(e){"false"===e.data.data?(alert("사용 가능"),console.log(e.data)):alert("이미 누가 사용하고 있는 아이디입니다.")})).catch((function(e){console.log(e)})):alert("사용할 수 없는 조합의 아이디입니다.")},checkPw(){return this.passwordValidFlag?(alert("사용 가능한 비밀번호 입니다."),!0):(alert("사용할 수 없는 조합입니다.\n패스워드 설정안내를 확인해 주세요."),!1)}}},L=n(89);const G=(0,L.Z)(T,[["render",M]]);var H=G}}]);
//# sourceMappingURL=about.43be96b4.js.map