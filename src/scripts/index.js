import { takeControlBurger, takeControlDirections, takeControlMap, takeControlAccordion } from "./takeControl";

takeControlBurger();
takeControlDirections();
takeControlMap();

const newsSwiper = new Swiper(".news-swiper", {
	slidesPerView: "auto",
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
	},
  clickable: true,
	mousewheel: false,
	keyboard: true,
});

const projectSwiper = new Swiper(".project__swiper", {
	direction: "horizontal",
	slidesPerView: 4,
	spaceBetween: 30,
	mousewheel: false,
	keyboard: true,
	breakpoints: {
		360: {
			slidesPerView: 1,
			pagination: {
				el: ".swiper-pagination",
			},
		},
		690: {
			slidesPerView: 2,
			pagination: {
				el: ".swiper-pagination",
			},
		},
		1020: {
			slidesPerView: 3,
			pagination: {
				el: ".swiper-pagination",
			},
		},
		1351: {
			direction: "vertical",
		},
	},
});

const navSwiper = new Swiper(".nav-bar", {
	slidesPerView: "auto",
	spaceBetween: 24,
	navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next",
	},
	mousewheel: false,
	keyboard: true,
	breakpoints: {
		991: {
			spaceBetween: 100,
		},
	},
});

takeControlAccordion(".about-company", ".accordion__list", {
	accordionItemSelector: ".accordion__item",
	accordionItemTogglerSelector: ".accordion__toggle",
	accordionItemContentSelector: ".accordion__content",
	accordionItemActiveClass: "accordion__item_active",
});

takeControlAccordion(".other-directions", ".accordion__list", {
	accordionItemSelector: ".accordion__item",
	accordionItemTogglerSelector: ".accordion__toggle",
	accordionItemContentSelector: ".accordion__content",
	accordionItemActiveClass: "accordion__item_active",
});

takeControlAccordion(".direction", ".accordion__list", {
	accordionItemSelector: ".accordion__item",
	accordionItemTogglerSelector: ".accordion__toggle",
	accordionItemContentSelector: ".accordion__content",
	accordionItemActiveClass: "accordion__item_active",
});

const headerNavLink = document.querySelectorAll(".header__nav-link");
headerNavLink.forEach((el) => {
	if (el.getAttribute("href") == window.location.pathname) el.classList.add("header__nav-link_active");
});

const navBarLink = document.querySelectorAll(".nav-bar__link");
navBarLink.forEach((el) => {
	if (el.getAttribute("href") == window.location.pathname) el.classList.add("nav-bar__link_active");
});
