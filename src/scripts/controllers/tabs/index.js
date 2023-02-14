const takeControlTabs = () => {
	const tabs = document.querySelectorAll('.tab');
	const tabContents = document.querySelectorAll('.tab-content-item');

	tabs.forEach(tab => {
		tab.addEventListener('click', function() {
			tabs.forEach(tab => tab.classList.remove('active'));
			tabContents.forEach(content => content.classList.remove('active'));

			this.classList.add('active');
			document.getElementById(this.dataset.tabContent).classList.add('active');
		});
	});
};

export default takeControlTabs;
