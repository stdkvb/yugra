import { takeControlBurger, takeControlDirections, takeControlMap, takeControlAccordion } from "./takeControl";

takeControlBurger();
takeControlDirections();
takeControlMap();

const newsSwiper = new Swiper(".news__swiper", {
	slidesPerView: "auto",
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

const tabsSwiper = new Swiper(".news-tabs", {
	slidesPerView: "auto",
	spaceBetween: 24,
	navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next",
	},
});

const projectSwiper = new Swiper(".project__swiper", {
	direction: "horizontal",
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		360: {
			slidesPerView: 1,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		},
		690: {
			slidesPerView: 2,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		},
		1020: {
			slidesPerView: 3,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		},
		1351: {
			direction: "vertical",
		},
	},
});

const navSwiper = new Swiper(".nav-bar", {
	slidesPerView: "auto",
	spaceBetween: 24,
	navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next",
	},
	mousewheel: false,
	keyboard: true,
	breakpoints: {
		991: {
			spaceBetween: 100,
		},
	},
});

const newsInternalSwiper = new Swiper(".news-internal__swiper", {
	direction: "horizontal",
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		360: {
			slidesPerView: 1,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		},
		690: {
			slidesPerView: 2,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		},
		1020: {
			slidesPerView: 3,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		},
		1351: {
			direction: "vertical",
		},
	},
});

const qualitySwiper = new Swiper(".quality__swiper", {
	direction: "horizontal",
	slidesPerView: "auto",
	spaceBetween: 30,
	breakpoints: {
		991: {
			direction: "vertical",
			slidesPerView: 3,
		}
	}
});

takeControlAccordion(".about-company", ".accordion__list", {
	accordionItemSelector: ".accordion__item",
	accordionItemTogglerSelector: ".accordion__toggle",
	accordionItemContentSelector: ".accordion__content",
	accordionItemActiveClass: "accordion__item_active",
});

takeControlAccordion(".other-directions", ".accordion__list", {
	accordionItemSelector: ".accordion__item",
	accordionItemTogglerSelector: ".accordion__toggle",
	accordionItemContentSelector: ".accordion__content",
	accordionItemActiveClass: "accordion__item_active",
});

takeControlAccordion(".direction", ".accordion__list", {
	accordionItemSelector: ".accordion__item",
	accordionItemTogglerSelector: ".accordion__toggle",
	accordionItemContentSelector: ".accordion__content",
	accordionItemActiveClass: "accordion__item_active",
});



// const paginationNumbers = document.getElementById("pagination-numbers");
const paginationNumbers = document.querySelector(".pagination-numbers");
// const paginatedList = document.getElementById("paginated-list");
const paginatedList = document.querySelector(".news-tabs__page");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 4;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

const tabs = document.querySelectorAll(".news-tabs__content");
tabs.forEach((el) => {

})
window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});


const headerNavLink = document.querySelectorAll(".header__nav-link");
headerNavLink.forEach((el) => {
	if (el.getAttribute("href") == window.location.pathname) el.classList.add("header__nav-link_active");
});

const navBarLink = document.querySelectorAll(".nav-bar__link");
navBarLink.forEach((el) => {
	if (el.getAttribute("href") == window.location.pathname) el.classList.add("nav-bar__link_active");
});
