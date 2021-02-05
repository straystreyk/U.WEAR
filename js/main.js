$(function() {

	setTimeout(function() {
		$('.preloader').css({
			opacity: '0',
		});;
	}, 3000);

	setTimeout(function() {
		$('.preloader').css('transform', 'translateY(-100%)');
	}, 3350);


	$('.burger_wrapper').click(function() {
		$('.line_burger').toggleClass('transform_burger');
		$('.menu_burger').toggleClass('show_menu');
		$('body').toggleClass('stop_scrolling');
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() > 50) {
			$('.burger_wrapper').css({
				position: 'fixed',
				background: 'rgba(255, 67, 56, 1)',
			});
			$('.line_burger').css('background', '#fff');
			$('.burger_wrapper').hover(function() {
				$('.burger_wrapper').css('box-shadow', '0 0 20px #000');
			}, function() {
				$('.burger_wrapper').css('box-shadow', '0 0 0px #000');
			});
		} else {
			$('.burger_wrapper').css({
				position: 'static',
				background: 'rgba(255, 67, 56, 0)'
			});
			$('.line_burger').css('background', '#000');
			$('.burger_wrapper').hover(function() {
				$('.burger_wrapper').css('box-shadow', '0 0 0px #000');
			}, function() {
				$('.burger_wrapper').css('box-shadow', '0 0 0px #000');
			});

		}
	});

	$('.scroller').click(function() {
		const windowHeight = $(window).innerHeight();
		$(window).scrollTop(windowHeight);
	});

	$('.authorization').click(function() {
		$('.popup_login').css({
			visibility: 'visible',
			opacity: '1'
		});
		$('body').toggleClass('stop_scrolling');
	});

	$('.close_popup, .cross_wrapper').click(function() {
		$('.popup_login').css({
			visibility: 'hidden',
			opacity: '0'
		});
		$('body').toggleClass('stop_scrolling');
	});
})