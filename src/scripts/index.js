import {takeControlBurger, takeControlDirections, takeControlMap, takeControlAccordion} from './takeControl'

takeControlBurger();
takeControlDirections();
takeControlMap();

const newsSwiper = new Swiper(".news-swiper", {
	slidesPerView: "auto",
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: false,
	keyboard: true,
});

const projectSwiper = new Swiper(".project__swiper", {
	direction: "horizontal",
	slidesPerView: 4,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: false,
	keyboard: true,
	breakpoints: {
		360: {
			slidesPerView: 1,
		},
		690: {
			slidesPerView: 2,
		},
		1020: {
			slidesPerView: 3,
		},
		1350: {
			direction: "vertical",
		},
	},
});

const navSwiper = new Swiper(".nav-bar", {
	slidesPerView: "auto",
	spaceBetween: 24,
	navigation: {
		nextEl: '.swiper-button-next',
	},
	mousewheel: false,
	keyboard: true,
	breakpoints: {
		991: {
			spaceBetween: 100,
		},
	},
});

takeControlAccordion('.about-company','.accordion__list', {
	accordionItemSelector: '.accordion__item',
	accordionItemTogglerSelector: '.accordion__toggle',
	accordionItemContentSelector: '.accordion__content',
	accordionItemActiveClass: 'accordion__item_active'
});


