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

	document.querySelectorAll(".dropdown").forEach((dropdownWrapper) => {
		const dropdownBtn = dropdownWrapper.querySelector(".dropdown__button");
		const dropdownList = dropdownWrapper.querySelector(".dropdown__list");
		const dropdownItems = dropdownList.querySelectorAll(".dropdown__list-item");
		const dropdownInput = dropdownWrapper.querySelector(".dropdown__input_hidden");

		dropdownBtn.addEventListener("click", function () {
			dropdownList.classList.toggle("dropdown__list_visible");
			this.classList.toggle("dropdown__button_active");
		});

		dropdownItems.forEach((listItem) => {
			listItem.addEventListener("click", function (e) {
				dropdownItems.forEach((el) => {
					el.classList.remove("dropdown__list-item_active");
				});
				e.target.classList.add("dropdown__list-item_active");
				dropdownBtn.innerText = this.innerText;
				dropdownInput.value = this.dataset.value;
				dropdownList.classList.remove("dropdown__list_visible");
			});
		});

		document.addEventListener("click", (e) => {
			if (e.target !== dropdownBtn) {
				dropdownBtn.classList.remove("dropdown__button_active");
				dropdownList.classList.remove("dropdown__list_visible");
			}
		});

		document.addEventListener("keydown", (e) => {
			if (e.key === "Tab" || e.key === "Escape") {
				dropdownBtn.classList.remove("dropdown__button_active");
				dropdownList.classList.remove("dropdown__list_visible");
			}
		});
	});

	document.querySelectorAll(".dropdown_with-chk").forEach((dropdownWrapper) => {
		const dropdownBtn = dropdownWrapper.querySelector(".dropdown_with-chk__button");
		const dropdownList = dropdownWrapper.querySelector(".dropdown_with-chk__list");
		const dropdownItems = dropdownList.querySelectorAll(".dropdown_with-chk__list-item");

		dropdownBtn.addEventListener("click", function () {
			dropdownList.classList.toggle("dropdown_with-chk__list_visible");
			this.classList.toggle("dropdown_with-chk__button_active");
		});

		dropdownItems.forEach((listItem) => {
			listItem.addEventListener("click", (e) => {
				e.target.classList.toggle("dropdown_with-chk__list-item_active");
			});
		});

		document.addEventListener("click", (e) => {
			if (
				e.target !== dropdownBtn &&
				e.target !== dropdownItems &&
				!e.target.classList.contains("dropdown_with-chk__list-item") &&
				!e.target.classList.contains("dropdown_with-chk__list-item_label")
			) {
				dropdownBtn.classList.remove("dropdown_with-chk__button_active");
				dropdownList.classList.remove("dropdown_with-chk__list_visible");
			}
		});

		document.addEventListener("keydown", (e) => {
			if (e.key === "Tab" || e.key === "Escape") {
				dropdownBtn.classList.remove("dropdown_with-chk__button_active");
				dropdownList.classList.remove("dropdown_with-chk__list_visible");
			}
		});
	});

	const fileInput = document.querySelector(".input-file-container");
	if (fileInput !== null) {
		fileInput.children[0].insertAdjacentHTML(
			"afterend",
			'<img src="./files/icons/clip.svg"><div class="file-button">Прикрепить файл</div><div class="loaded-file"><span class="file-name"></span></div>'
		);
		fileInput.children[0].addEventListener("change", function () {
			if (fileInput.children[0].files[0].size > 5242880) {
				alert("Максимальный размер файла 5 Мб!");
			} else if (document.querySelector(".loaded-file").contains(document.querySelector(".file-icon"))) {
				document.querySelector(".loaded-file").removeChild(document.querySelector(".delete-button"));
				document.querySelector(".loaded-file").removeChild(document.querySelector(".file-icon"));
			} else {
				const splitFileName = this.value.split(/\\/);
				document.querySelector(".file-name").innerText = splitFileName[splitFileName.length - 1];
				document.querySelector(".file-name").insertAdjacentHTML(
					"beforebegin",
					'<img class="file-icon" src="./files/icons/file.svg">'
				);
				document.querySelector(".file-name").insertAdjacentHTML(
					"afterend",
					'<img class="delete-button" src="./files/icons/delete-file.svg">'
				);
			};

			const deleteButton = document.querySelector(".delete-button");
			deleteButton.addEventListener("click", () => {
				document.querySelector(".file-name").textContent = "";
				document.querySelector(".loaded-file").removeChild(document.querySelector(".delete-button"));
				document.querySelector(".loaded-file").removeChild(document.querySelector(".file-icon"));
			});
		});
	};
};

export default takeControlForm;
