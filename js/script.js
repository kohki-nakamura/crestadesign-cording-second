$(function(){
	$(window).on('scroll', function() {
		if ($('.header__image').height() < $(this).scrollTop()) {
			$('.header__contents').addClass('change-color');
		} else {
			$('.header__contents').removeClass('change-color');
		}
	});
});