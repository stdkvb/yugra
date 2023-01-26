const burgerButton = document.getElementById("burger-button");
const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
burgerButton.addEventListener("click", () => {
	if (headerMenu.classList.contains("header__menu_active")) {
		headerMenu.classList.remove("header__menu_active");
		headerMenu.parentElement.classList.remove("header__wrapper_active");
		header.classList.remove("header_blur");
		burgerButton.classList.remove("header__burger-button_active");
		burgerButton.classList.remove("header__burger-button_white_active");
		document.body.classList.remove("body_overflow-hidden");
	} else {
		headerMenu.classList.add("header__menu_active");
		headerMenu.parentElement.classList.add("header__wrapper_active");
		header.classList.add("header_blur");
		burgerButton.classList.add("header__burger-button_active");
		burgerButton.classList.add("header__burger-button_white_active");
		document.body.classList.add("body_overflow-hidden");
	}
});

const directions = document.querySelectorAll(".directions__header");
directions.forEach((elem) => {
	elem.addEventListener("click", function () {
		const aboutActive = document.querySelectorAll(".directions__about_active");
		aboutActive.forEach((elem) => {
			elem.classList.remove("directions__about_active");
		});
		const directionArrowActive = document.querySelectorAll(".directions__direction-button_active");
		directionArrowActive.forEach((elem) => {
			elem.classList.remove("directions__direction-button_active");
		});
		const titleActive = document.querySelectorAll(".directions__direction-title_active");
		titleActive.forEach((elem) => {
			elem.classList.remove("directions__direction-title_active");
		});
		const directionActive = document.querySelectorAll(".directions__direction_active");
		directionActive.forEach((elem) => {
			elem.classList.remove("directions__direction_active");
		});
		const backgroundActive = document.querySelectorAll(".directions__background-image_active");
		backgroundActive.forEach((elem) => {
			elem.classList.remove("directions__background-image_active");
		});
		const direction = this.parentNode;
		const about = direction.querySelector(".directions__about");
		const directionArrow = direction.querySelector(".directions__direction-button");
		const title = direction.querySelector(".directions__direction-title");
		const background = direction.querySelector(".directions__background-image");
		if (about.classList.contains("directions__about_active")) {
			about.classList.remove("directions__about_active");
			directionArrow.classList.remove("directions__direction-button_active");
			title.classList.remove("directions__direction-title_active");
			direction.classList.remove("directions__direction_active");
			background.classList.remove("directions__background-image_active");
		} else {
			about.classList.add("directions__about_active");
			directionArrow.classList.add("directions__direction-button_active");
			title.classList.add("directions__direction-title_active");
			direction.classList.add("directions__direction_active");
			background.classList.add("directions__background-image_active");
		}
	});
});

const marks = document.querySelectorAll(".geography__map-mark");
marks.forEach((elem) => {
	elem.addEventListener("click", function () {
		const cardActive = document.querySelectorAll(".geography__map-card_active");
		cardActive.forEach((elem) => {
			elem.classList.remove("geography__map-card_active");
		});
		const card = this.previousElementSibling;
		card.classList.toggle("geography__map-card_active");
	});
	const map = document.querySelector(".geography__map");
	map.onclick = function () {
		const cardActive = document.querySelectorAll(".geography__map-card_active");
		cardActive.forEach((elem) => {
			elem.classList.remove("geography__map-card_active");
		});
	};
});

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
