//javascript document
//메뉴
$(".sub").hide();
$(".menu>li").mouseover(function(){
    $(".sub").stop().slideDown();
});
$(".menu>li").mouseleave(function(){
    $(".sub").stop().slideUp();
});
//모바일 메뉴
$(".m_bg").hide();
$(".m_btn").click(function(){
	$(".m_bg").stop().fadeIn();
})
$(".m_close").click(function(){
	$(".m_bg").stop().fadeOut(); 
})
$(".m_sub").hide();
$(".m_menu>li>a").click(function(){
	$(this).siblings(".m_sub").slideToggle();
	$(this).toggleClass('addcolor');
	$(this).parent().siblings().children("a").removeClass('addcolor');
	$(this).parent().siblings().children(".m_sub").slideUp();
})
//슬라이드
var swiper = new Swiper('.swiper-container',{
  spaceBetween: 30, effect: "fade",
  navigation: {prevEl:'.swiper-button-prev', nextEl:'.swiper-button-next', },
  pagination: {el:'.swiper-pagination', clickable: true, },
  loop: true, autoplay: {delay: 3000, disableOnInteraction: false, },
});
//탭
$(".tab_title>li:nth-child(2)").click(function(){
    $(".notice").hide();
    $(".review").show();
    $(".tab_title>li:nth-child(1)").css({"filter":"opacity(30%)"});
    $(".tab_title>li:nth-child(2)").css({"filter":"opacity(100%)"});
});
$(".tab_title>li:nth-child(1)").click(function(){
    $(".notice").show();
    $(".review").hide();
    $(".tab_title>li:nth-child(2)").css({"filter":"opacity(30%)"});
    $(".tab_title>li:nth-child(1)").css({"filter":"opacity(100%)"});
});
//모달리스
$(".modaless").hide();
$(".headerMenu>li:nth-child(4)").click(function(){
    $(".modaless").show();
});
$(".close").click(function(){
    $(".modaless").hide();
});
//모달
$(".campaign").click(function(){
    $(".modal").show();
    var imgsrc = $(this).children("img").attr("src");
	$(".modal_img").attr("src", imgsrc);
});
$(".modal").click(function(e){
    if (e.target.className != "modal"){return false;
    } else{$(".modal").hide();
    }
});