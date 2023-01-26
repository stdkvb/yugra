const takeControlMap = () => {
	const marks = document.querySelectorAll(".map__map-mark");
	marks.forEach((elem) => {
		elem.addEventListener("click", function () {
			const cardActive = document.querySelectorAll(".map__map-card_active");
			cardActive.forEach((elem) => {
				elem.classList.remove("map__map-card_active");
			});
			const card = this.previousElementSibling;
			card.classList.toggle("map__map-card_active");
		});
		const map = document.querySelector(".map__map-image");
		map.onclick = function () {
			const cardActive = document.querySelectorAll(".map__map-card_active");
			cardActive.forEach((elem) => {
				elem.classList.remove("map__map-card_active");
			});
		};
	});
};

export default takeControlMap;
