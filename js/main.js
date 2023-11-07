
/* 팝업 */
$('.popup i').click(function(){
    $('.popup').hide();
});

/* 서브메뉴 */
var gnb = $('header .middle>ul>li');

gnb.mouseover(function(){
    $(this).find('ul').stop().fadeIn();
});

gnb.mouseleave(function(){
    $(this).find('ul').stop().fadeOut();
});

/* 배너 -슬릭 */
$('.banner').slick({
    /* setting-name: setting-value */
    infinite: true,
    autoplay: true,
    fade:true,
    pauseOnHover:false
});

/* sec2 -슬릭 */
$('.img_wrap').slick({
    slidesToShow: 2,
    slideToScroll: 1,
    centerMode:true,
    /* centerPadding:'80px', */
    /* infinite: true,
    autoplay: true,
    pauseOnHover:false */
});

/* 라인배너2 - 슬릭 */
$('.line2_wrap').slick({
    arrows:false, //pre,next 버튼자체 없앰
    fade:true, //슬라이드 fade로 나타나고 사라짐
    dots:true, //dots 생성
    /* autoplay: true,
    pauseOnHover:false */ //마우스올렸을때 멈춤 없앰
});

/* sec3 슬릭 */
$('.sec3_slick').slick({
    slidesToShow: 4,
    //slideToScroll: 4,
    dots:true, //dots 생성
});

/* sec3 찜버튼 */
$('.sec3 .card .middle .ggim').click(function(){
    $(this).parents('.card').toggleClass('active');

    if($(this).parents('.card').hasClass('active')){
        $(this).find('i.fa-solid').css({'display':'block'})
    }else{
        $(this).find('i.fa-solid').css({'display':'none'})
    }
});









/* a태크 튕김방지 */
$('a').click(function(e){
    e.preventDefault();
});