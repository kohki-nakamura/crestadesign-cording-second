$(function(){
	// ヘッダーの背景色切り替え
	$(window).on('scroll', function() {
		if ($('.header__image').height() < $(this).scrollTop()) {
			$('.header__contents').addClass('change-color');
		} else {
			$('.header__contents').removeClass('change-color');
		}
	});

	// ハンバーガーメニュー
	$('.burger-btn, .nav-item a').on('click',function(){
		$('.burger-btn').toggleClass('close');
		$('.header__nav-wrapper').fadeToggle(500);
		$('body').toggleClass('noscroll');
	});

	// トップページFirstViewのスライドショー
	$('.bg-slider').bgSwitcher({
		images: ['images/fv-bgi_01@2x.jpg','images/fv-bgi_02@2x.jpg'], // 切り替える背景画像を指定
	});
});