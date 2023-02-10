const takeControlCookie = () => {
	const cookieCloseButton = document.getElementById("cookie_close");
	if (cookieCloseButton !== null) {
		cookieCloseButton.addEventListener("click", () => {
			document.querySelector(".cookie").style.display = "none";
		});
	};
};

export default takeControlCookie;
