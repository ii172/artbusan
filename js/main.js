$(function () {
  $('.nav_btn').click(function(){ 
		$(this).fadeOut(900); 
    $('.sum_mn').fadeIn(900);
    $('.darkback').fadeIn(900);
	});
	$('.closeBtn').click(function(){ 
    $('.sum_mn').fadeOut(1000); 
    $('.darkback').fadeOut(1000); 
		$('.nav_btn').fadeIn(900); 
  });

  // $(".menu01 li a").click(function (){ 
  //   $(".sub").slideToggle("slow"); 
  // });


//메인슬라이더
$(".lazy").slick({
    autoplay: true,
    dots:true,
    lazyLoad: 'ondemand',
    infinite: true,
    pauseOnHover : true
  });
//#section3 슬라이더
  $("#section3 .regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });
  //NEWS 슬라이드
  // $("section5 .lazy").slick({
  //   autoplay: true,
  //   dots:true,
  //   lazyLoad: 'ondemand',
  //   infinite: true,
  //   pauseOnHover : true
  // });
  $("#section5 .regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});