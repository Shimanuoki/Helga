$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		slidesToScroll:1,
		autoplay:true,
		speed:900,
		autoplaySpeed:3000,
		pauseonfocus:true,
		pauseonhover:true,
		centerMode:true,
		//fade:true,
		adaptiveHeight:true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

