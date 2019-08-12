$('.life-slider_top').slick({
	arrows: false,
	asNavFor: '.life-slider_bottom',
	touchMove: false,
	responsive: [
    {
      breakpoint: 576,
      settings: {
				dots: true,
				touchMove: true,
      }
		}
	]
});

$('.life-slider_bottom').slick({
	asNavFor: '.life-slider_top',
	touchMove: false,
	slidesToShow: 5,
	focusOnSelect: true,
	prevArrow: '<div class="slider-arrow__life slider-arrow__life_left"></div>',
	nextArrow: '<div class="slider-arrow__life slider-arrow__life_right"></div>',
});

$('.videos-slider').slick({
	slidesToShow: 3,
	centerMode: true,
	arrows: false,
	dots: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				dots: true,
				slidesToShow: 1,
				centerMode: false,
				arrows: true,
				prevArrow: '<div class="slider-arrow__videos slider-arrow__videos_left"></div>',
				nextArrow: '<div class="slider-arrow__videos slider-arrow__videos_right"></div>',
			}
		},

		{
			breakpoint: 992,
			settings: {
				arrows: false,
				dots: true,
				slidesToShow: 1,
				centerMode: false,
			}
		}
	]
})

//Меню гамбургер
$(document).ready(function(){
	const link = $('.menu-link');
	const menu = $('.menu');
	const nav_link = $('.menu a');

	link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});

	nav_link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active')
	})

});