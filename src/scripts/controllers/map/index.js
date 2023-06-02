const takeControlMap = () => {
	const marks = document.querySelectorAll(".map__map-mark");
	marks.forEach((elem) => {
		elem.addEventListener("click", function () {
			const cardActive = document.querySelectorAll(".map__map-card_active");
			cardActive.forEach((elem) => {
				elem.classList.remove("map__map-card_active");
			});
			const card = this.nextElementSibling;
			card.classList.toggle("map__map-card_active");
			if (window.innerWidth < 1350) {
				// document.body.style.overflow = "hidden";
			}
		});
		const map = document.querySelector(".map__map-image");
		map.onclick = function () {
			const cardActive = document.querySelectorAll(".map__map-card_active");
			cardActive.forEach((elem) => {
				elem.classList.remove("map__map-card_active");
			});
			// document.body.style.overflow = "unset";
		};
	});
};

export default takeControlMap;
