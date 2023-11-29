const takeControlDirections = () => {
	const removeBackground = () => {
		const backgroundActive = document.querySelectorAll(".directions__background-image_active");
		backgroundActive.forEach((elem) => {
			elem.classList.remove("directions__background-image_active");
		});
	};

	const directionHeaders = document.querySelectorAll(".directions__header");
	directionHeaders.forEach((el) => {
		let id = el.getAttribute("id");
		let backgroundId = id.replace("direction", "direction-background");
		if (window.innerWidth > 1019) {
			el.addEventListener("mouseover", () => {
				removeBackground();
				document.getElementById(backgroundId).classList.add("directions__background-image_active");
			});
		}

		el.addEventListener("click", () => {
			removeBackground();
			document.getElementById(backgroundId).classList.add("directions__background-image_active");
		});
	});

	const directions = document.querySelectorAll(".directions__header");
	directions.forEach((elem) => {
		if (window.innerWidth > 1019) {
			elem.addEventListener("mouseover", function () {
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
		}

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
};

export default takeControlDirections;

