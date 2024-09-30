function formCheck(){
	var join = document.join;
		
	//아이디검사
	if(!join.id.value){
		alert("아이디를 입력하세요!");
		join.id.focus();
		return false;
	}
	
	//비밀번호 검사
	if(!join.pw.value){
		alert("비밀번호를 입력하세요!");
		join.pw.focus();
		return false;
	}
	if(join.pw.value.length<8){
		alert("비밀번호를 8자 이상 입력하세요!");
		join.pw.focus();
		return false;
	}
		
	
	//회원명 검사
	if(!join.irum.value){
		alert("회원명을 입력하세요!");
		join.irum.focus();
		return false;
	}

	//이메일 검사
	if(!join.email.value){
		alert("정확한 이메일을 입력하세요!");
		join.email.focus();
		return false;
	}
	
	//휴대번호 검사
	if(!join.hp.value){
		alert("휴대전화번호를 입력하세요!");
		join.hp.focus();
		return false;
	}
	if(isNaN(join.hp.value)){
		alert("숫자만 입력하세요!");
		join.hp.focus();
		return false;
	}

	var res = confirm('서버로전송할까요?');
	
	if(res==true){
	  join.submit();
	}else{
	   location.href="join2.html";
	}
	return false;
}