const takeControlModal = () => {
	const successModal = document.getElementById("success-modal");
	const form = document.getElementById("form");
	const closeModalButton = document.querySelector(".modal-close");
	if (form !== null) {
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			successModal.classList.add("modal_active");
			event.target.reset();
		});
		closeModalButton.addEventListener("click", () => {
			successModal.classList.remove("modal_active");
		});
	};
};

export default takeControlModal;
