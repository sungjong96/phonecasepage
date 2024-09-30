	 //아이디암호입력 체크스립트
	function idpwCheck(){
	 
	 var idVal = document.getElementById('ida');
	 var pwVal = document.getElementById('pwa'); 
	 
	 if(!idVal.value){
		   alert("아이디를 입력하세요!");
			idVal.focus();
			return false;
	 }
	 if(!pwVal.value){
		   alert("비밀번호를 입력하세요!");
			pwVal.focus();
			return false;
	 }
	   frm.submit();// action으로 이동
	}
