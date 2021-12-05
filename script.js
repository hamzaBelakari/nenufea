var swiper = new Swiper(".mySwiper", {
  spaceBetween: 27,
  slidesPerView: 4,
  freeMode: true,
  loop: false,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".thumbs-next",
    prevEl: ".thumbs-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 27,
    },
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".main-img-next",
    prevEl: ".main-img-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// TABS FUNCTION

(function () {
  function onTabClick(event) {
    console.log(event.target);
    const activeTab = document.querySelectorAll(".nav-tabs .active");
    const activeContent = document.querySelectorAll(".tab-content .active");
    const actives = [...activeTab, ...activeContent];

    console.log(actives);

    // deactivate existing active tab and panel
    for (let i = 0; i < actives.length; i++) {
      actives[i].className = actives[i].className.replace("active", "");
    }

    // activate new tab and panel
    event.target.parentElement.classList.add("active");
    document.getElementById(event.target.dataset.tab).classList.add("active");
  }

  // get al tabs
  const tabs = document.querySelectorAll(".nav-tabs li");
  tabs.forEach((tab) => {
    console.log(tab);
    tab.addEventListener("click", onTabClick, false);
  });
})();
