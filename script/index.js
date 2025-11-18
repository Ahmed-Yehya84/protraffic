const bannerData = [
  {
    title: "Брендирование сайта",
    price: "$5500",
    month: "месяц",
    rotation: "2 слота в ротации",
    text: "Самый большой и кликабельный рекламный формат, отображающийся на всех страницах сайта на десктопе и мобайле и дабщий возможность привлечь максимум целевой аудитории.",
    image: "../images/slide1.jpg",
    alt: "laptop image",
  },
  {
    title: "Кнопка в меню навигации",
    price: "$1 500",
    month: "месяц",
    rotation: "без ротации",
    text: "Этот формат имеет высокую кликабельность за счет отсутствия ротации и хорошей видимости на любых устройствах. Размещается в верхней части экрана на десктопе и мобайле на всех страницах сайта.",
    image: "../images/slide2.jpg",
    alt: "iphone screen image",
    modifier: "banner__item-rotation--none",
  },
  {
    title: "Кнопка Лого х Лого",
    price: "$1 500",
    month: "месяц",
    rotation: "без ротации",
    text: "Отличный формат с высокой кликабельностью и отсутствием ротации поможет повысить узнаваемость бренда рекламодателя и привлечь целевую аудиторию.Размещается в верхней части экрана на десктопе и мобайле на всех страницах сайта.",
    image: "../images/slide3.jpg",
    alt: "iphone screen image",
    modifier: "banner__item-rotation--none",
  },
  {
    title: "Баннер в сайдбаре",
    price: "$1500",
    month: "месяц",
    rotation: "4 слота в ротации",
    text: "Самый большой баннер в нашей линейке, который невозможно не заметить. На десктопе: размещается на главной странице и с правой стороны от любого текстового материала. На мобайле - на главной странице и в конце каждой статьи.",
    image: "../images/slide4.jpg",
    alt: "ipad image",
  },
  {
    title: "Pop-up",
    price: "$1 500",
    month: "месяц",
    rotation: "4 слота в ротации",
    text: "Баннер, который невозможно не заметить. Появляется спустя 5 секунд после открытия страницы. На Десктопе размещается в нижней левой части экранеНа Мобайле в нижней части экрана",
    image: "../images/slide5.jpg",
    alt: "macbook image",
  },
];

const bannerSection = document.querySelector(".banner");
const template = document.getElementById("banner__item-template");

bannerData.forEach((item) => {
  const clone = template.content.cloneNode(true);
  const card = clone.querySelector(".banner__item-rotation");
  if (item.modifier) {
    card.classList.add(item.modifier);
  }
  clone.querySelector(".banner__item-title").textContent = item.title;
  clone.querySelector(".banner__item-price").textContent = item.price;
  clone.querySelector(".banner__item-month").textContent = item.month;
  clone.querySelector(".banner__item-rotation").textContent = item.rotation;
  clone.querySelector(".banner__item-text").textContent = item.text;
  const img = clone.querySelector(".banner__item-image");
  img.src = item.image;
  img.alt = item.alt;
  bannerSection.appendChild(clone);
});

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".header__nav-toggle");
  const navLinks = document.querySelector(".header__nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("header__nav-links--active");
  });
});
