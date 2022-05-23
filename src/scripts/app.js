const hamburger = document.querySelector(".js-header-hamburger");
const backdrop = document.querySelector(".js-backdrop");

hamburger.addEventListener("click", function () {
    backdrop.classList.add('open');
});

backdrop.addEventListener("click", function () {
    backdrop.classList.remove('open');
});

const productsLink = document.querySelector(".products");
const productsSection = document.querySelector(".products-section");

productsLink.addEventListener("click", function() {
    productsSection.scrollIntoView();
});

const newsLink = document.querySelector(".news");
const newsSection = document.querySelector(".news-section");

newsLink.addEventListener("click", function() {
    newsSection.scrollIntoView();
});

const contactLink = document.querySelector(".contact");
const footerSection = document.querySelector(".site-footer");

contactLink.addEventListener("click", function() {
    footerSection.scrollIntoView();
});
