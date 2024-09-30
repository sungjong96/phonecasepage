$(function(){
    var gnbA = $('.gnb>ul>li>a'); //주메뉴
    gnbA.on('mouseenter focus',function(){
        $('.sub').hide(); //감추기 == display:none
        $(this).next().slideDown(400); //보이기
    });
    $('.gnb').mouseleave(function(){
        $('.sub').hide(); //감추기
    });
});
