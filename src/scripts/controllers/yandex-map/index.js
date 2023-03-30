const takeControlYandexMap= () => {
	if (document.getElementById('yandex-map') !== null) {
		function init() {
			let map = new ymaps.Map('yandex-map', {
				center: [54.799957, 56.041354],
				zoom: 17
			});
			let placemark = new ymaps.Placemark([54.799957, 56.041354], {}, {
				iconLayout: 'default#image',
				iconImageHref: './files/icons/map-mark.svg',
				iconImageSize: [35, 45],
				iconImageOffset: [-19, -44]
			});
			map.geoObjects.add(placemark);
		}
		ymaps.ready(init);
	}
};

export default takeControlYandexMap;
