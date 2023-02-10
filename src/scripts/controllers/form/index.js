const takeControlForm = () => {
	document.addEventListener("DOMContentLoaded", () => {
		const eventCalllback = function (e) {
			const el = e.target;
			const clearVal = el.dataset.phoneClear;
			const pattern = el.dataset.phonePattern;
			const matrix_def = "+7(___) ___-__-__";
			const matrix = pattern || matrix_def;
			let i = 0;
			const def = matrix.replace(/\D/g, "");
			let val = e.target.value.replace(/\D/g, "");
			if (clearVal !== "false" && e.type === "blur") {
				if (val.length < matrix.match(/([\_\d])/g).length) {
					e.target.value = "";
					return;
				}
			}
			if (def.length >= val.length) val = def;
			e.target.value = matrix.replace(/./g, (a) => {
				return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
			});
		};
		const phone_inputs = document.querySelectorAll("[data-phone-pattern]");
		for (const elem of phone_inputs) {
			for (const ev of ["input", "blur", "focus"]) {
				elem.addEventListener(ev, eventCalllback);
			}
		}
	});

	const fileInput = document.querySelector(".input-file-container");
	if (fileInput !== null) {
				fileInput.children[0].insertAdjacentHTML(
					"afterend",
					'<img src="./files/icons/clip.svg"><div class="file-button">Прикрепить файл</div><span class="file-name"></span>'
				);
				fileInput.children[0].addEventListener("change", function () {
					const splitFileName = this.value.split(/\\/);
					fileInput.children[3].innerText = splitFileName[splitFileName.length - 1];
				});
	}
};

export default takeControlForm;
