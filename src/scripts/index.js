import {
	takeControlBurger,
	takeControlDirections,
	takeControlMap,
	takeControlAccordion,
	takeControlForm,
	takeControlModal,
	takeControlCookie,
	takeControlPagination,
} from "./controllers";

takeControlBurger();
takeControlDirections();
takeControlMap();
takeControlForm();
takeControlModal();
takeControlCookie();
takeControlPagination();

const newsSwiper = new Swiper(".news__swiper", {
	slidesPerView: "auto",
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

const tabsSwiper = new Swiper(".news-tabs", {
	slidesPerView: "auto",
	spaceBetween: 24,
	navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next",
	},
});

const projectSwiper = new Swiper(".project__swiper", {
	direction: "horizontal",
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		360: {
			slidesPerView: 1,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		},
		690: {
			slidesPerView: 2,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		},
		1020: {
			slidesPerView: 3,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		},
		1351: {
			direction: "vertical",
		},
	},
});

const navSwiper = new Swiper(".nav-bar__wrapper", {
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

const newsInternalSwiper = new Swiper(".news-internal__swiper", {
	direction: "horizontal",
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		360: {
			slidesPerView: 1,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		},
		690: {
			slidesPerView: 2,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		},
		1020: {
			slidesPerView: 3,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		},
		1351: {
			direction: "vertical",
		},
	},
});

const qualitySwiper = new Swiper(".quality__swiper", {
	direction: "horizontal",
	slidesPerView: "auto",
	spaceBetween: 30,
	breakpoints: {
		991: {
			direction: "vertical",
			slidesPerView: "auto",
			navigation: {
				prevEl: ".swiper-button-prev-unique",
				nextEl: ".swiper-button-next-unique",
			},
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
