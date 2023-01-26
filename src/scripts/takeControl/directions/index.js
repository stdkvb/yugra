const takeControlDirections = () => {
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
}

export default takeControlDirections;
