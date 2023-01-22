const burgerButton = document.querySelector(".header__burger-button");
const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
burgerButton.addEventListener("click", () => {
	if (headerMenu.classList.contains("header__menu_active")) {
		headerMenu.classList.remove("header__menu_active");
		headerMenu.parentElement.classList.remove("header__wrapper_active");
		header.classList.remove("header_blur");
	} else {
		headerMenu.classList.add("header__menu_active");
		headerMenu.parentElement.classList.add("header__wrapper_active");
		header.classList.add("header_blur");
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
		const direction = this.parentNode;
		const about = direction.querySelector(".directions__about");
		const directionArrow = direction.querySelector(".directions__direction-button");
		const title = direction.querySelector(".directions__direction-title");
		if (about.classList.contains("directions__about_active")) {
			about.classList.remove("directions__about_active");
			directionArrow.classList.remove("directions__direction-button_active");
			title.classList.remove("directions__direction-title_active");
			direction.classList.remove("directions__direction_active");
		} else {
			about.classList.add("directions__about_active");
			directionArrow.classList.add("directions__direction-button_active");
			title.classList.add("directions__direction-title_active");
			direction.classList.add("directions__direction_active");
		}
	});
});

const marks = document.querySelectorAll(".geography__map-mark");
marks.forEach((elem) => {
	elem.addEventListener("click", function () {
		const card = this.previousElementSibling;
		if (card.classList.contains("geography__map-card_active")) {
			card.classList.remove("geography__map-card_active");
		} else {
			card.classList.add("geography__map-card_active");
		}
	});
});
