const takeControlModal = () => {
	const successModal = document.getElementById("success-modal");
	const modalContainer = document.querySelector("modal-container");
	const form = document.getElementById("form");
	const closeModalButton = document.querySelector(".modal-close");
	if (form !== null) {
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			successModal.classList.add("modal_active");
			document.body.style.overflow = 'hidden';
			event.target.reset();
		});
		closeModalButton.addEventListener("click", () => {
			successModal.classList.remove("modal_active");
			document.body.style.overflow = 'unset';
		});
		successModal.addEventListener("click", () => {
			successModal.classList.remove("modal_active");
			document.body.style.overflow = 'unset';
		});
	};
};

export default takeControlModal;
