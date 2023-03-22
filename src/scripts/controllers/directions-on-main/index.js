const takeControlDirections = () => {
	const removeBackground = () => {
		const backgroundActive = document.querySelectorAll(".directions__background-image_active");
		backgroundActive.forEach((elem) => {
			elem.classList.remove("directions__background-image_active");
		});
	};
	if (document.getElementById("direction-1") !== null) {
		// desktop
		document.getElementById("direction-1").addEventListener("mouseover", () => {
			removeBackground();
			document.getElementById("direction-background-1").classList.add("directions__background-image_active");
		});

		document.getElementById("direction-2").addEventListener("mouseover", () => {
			removeBackground();
			document.getElementById("direction-background-2").classList.add("directions__background-image_active");
		});

		document.getElementById("direction-3").addEventListener("mouseover", () => {
			removeBackground();
			document.getElementById("direction-background-3").classList.add("directions__background-image_active");
		});

		document.getElementById("direction-4").addEventListener("mouseover", () => {
			removeBackground();
			document.getElementById("direction-background-4").classList.add("directions__background-image_active");
		});

		// accordion on mobile
		document.getElementById("direction-1").addEventListener("click", () => {
			removeBackground();
			document.getElementById("direction-background-1").classList.add("directions__background-image_active");
		});

		document.getElementById("direction-2").addEventListener("click", () => {
			removeBackground();
			document.getElementById("direction-background-2").classList.add("directions__background-image_active");
		});

		document.getElementById("direction-3").addEventListener("click", () => {
			removeBackground();
			document.getElementById("direction-background-3").classList.add("directions__background-image_active");
		});

		document.getElementById("direction-4").addEventListener("click", () => {
			removeBackground();
			document.getElementById("direction-background-4").classList.add("directions__background-image_active");
		});

		const directions = document.querySelectorAll(".directions__header");
		directions.forEach((elem) => {
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
	}
};

export default takeControlDirections;
