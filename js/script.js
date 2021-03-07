$(function(){
	$(window).on('scroll', function() {
		if ($('.header__image').height() < $(this).scrollTop()) {
			$('.header__contents').addClass('change-color');
		} else {
			$('.header__contents').removeClass('change-color');
		}
	});

	$('.burger-btn, .nav-item a').on('click',function(){
		$('.burger-btn').toggleClass('close');
		$('.header__nav-wrapper').fadeToggle(500);
		$('body').toggleClass('noscroll');
	});
});