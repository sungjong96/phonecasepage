$(function(){

	$('.menuBtn').click(function(){
		$(".nav").stop().slideToggle('fast');
	});	

	$(".search").click(
    function(){
	  $(".search_wrap").stop().slideToggle('fast');
	  //fast :200/1000(0.2초) slow :600/1000(0.6초)
	  return false;
	 });	

});

//약관동의
function check(){
	var frm = document.frm;
	if(!frm.agree1.checked){
		alert("약관에 동의하세요!");
		frm.agree1.focus();
		return;
	}
	if(!frm.agree2.checked){
		alert("개인정보에 동의하세요!");
		frm.agree2.focus();
		return;
	}
	location.href = "join2.html";	
}

function allCheck(){
	with(document.frm){
		if(all.checked){
			for(var i=0;i<length;i++){
				if(elements[i].type == "checkbox"){
					elements[i].checked = true;
				}
			}
		}else{
			for(var i=0;i<length;i++){
				if(elements[i].type == "checkbox"){
					elements[i].checked = false;
				}
			}
		}
	}
}
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



function formCheck2(){
	var join = document.join;
	//var reg_id = /(?=.*[a-z])(?=.*[0-9])/;//문자와수치만사용시
	var reg_email = /([0-9a-zA-Z_]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_]+)/;
	var reg_num = /(?=.*[a-z])(?=.*[0-9])(?=.*[?~!@#$%^&*_-])/;
	
	//아이디검사
	if(!join.id.value){
		alert("아이디를 입력하세요!");
		join.id.focus();
		return false;
	}
	if(!reg_email.test(join.id.value)){
		alert("이메일형식에 맞게 입력하세요!");
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
	if(!reg_num.test(join.pw.value)){
		alert("비밀번호는 영문, 숫자, 특수문자를 포함하는 형식이어야 합니다!");
		join.pw.focus();
		return false;
	}
	
	//비밀번호 재입력 검사
	if(!join.repw.value){
		alert("비밀번호를 확인하세요!");
		join.repw.focus();
		return false;
	}
	if(join.pw.value!=join.repw.value){
		alert("비밀번호가 맞지 않습니다!");
		join.repw.focus();
		return false;
	}
	
	//회원명 검사
	if(!join.memberName.value){
		alert("회원명을 입력하세요!");
		join.memberName.focus();
		return false;
	}

	//회사명 검사
	if(!join.address.value){
		alert("정확한 주소를 입력하세요!");
		join.address.focus();
		return false;
	}

	//전화번호 검사
	if(!join.tel.value){
		alert("전화번호를 입력하세요!");
		join.tel.focus();
		return false;
	}
	if(isNaN(join.tel.value)){
		alert("숫자만 입력하세요!");
		join.tel.focus();
		return false;
	}

	//휴대전화번호 검사
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

//고객문의Q&A메뉴

//주메뉴
$('#container6 .qnaContents dt').click(function(){
  $(this).next().toggleClass('on');
  $(this).next().siblings('dd').removeClass('on');
});

//서브메뉴
$('#container6 .qnaContents dd li').click(function(){
  $(this).find('ul.answer').toggleClass('on');
  $(this).siblings().find('ul.answer').removeClass('on');
});
