const takeControlBurger = () => {
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
			if (burgerButton.classList.contains("header__burger-button_white")) {
				burgerButton.classList.add("header__burger-button_white_active");
			} else {
				burgerButton.classList.add("header__burger-button_active");
			}
			document.body.classList.add("body_overflow-hidden");
		}
	});
}

export default takeControlBurger;
