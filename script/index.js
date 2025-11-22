// const menuToggle = document.querySelector(".header__menu-toggle");
// const nav = document.querySelector(".header__nav");

// if (menuToggle) {
//   menuToggle.addEventListener("click", () => {
//     const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
//     menuToggle.setAttribute("aria-expanded", !isExpanded);
//     nav.classList.toggle("header__nav--active");
//   });

//   // Close menu when a link is clicked
//   document.querySelectorAll(".header__nav-link").forEach((link) => {
//     link.addEventListener("click", () => {
//       menuToggle.setAttribute("aria-expanded", "false");
//       nav.classList.remove("header__nav--active");
//     });
//   });
// }

const menuToggle = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".header__nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    // Toggle ARIA attribute
    menuToggle.setAttribute("aria-expanded", !isExpanded);

    // Toggle the class on the nav (for showing/hiding the menu content)
    nav.classList.toggle("header__nav--active");

    // NEW: Toggle the class on the button itself (for the "X" animation)
    menuToggle.classList.toggle("header__menu-toggle--active");
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".header__nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("header__nav--active");
      // NEW: Remove the active class from the button when a link is clicked
      menuToggle.classList.remove("header__menu-toggle--active");
    });
  });
}

// logic for banner section
const bannerData = [
  {
    title: "Брендирование сайта",
    price: "$5500",
    month: "месяц",
    rotation: "2 слота в ротации",
    text: "Самый большой и кликабельный рекламный формат, отображающийся на всех страницах сайта на десктопе и мобайле и дабщий возможность привлечь максимум целевой аудитории.",
    image: "images/slide1.jpg",
    alt: "laptop image",
  },
  {
    title: "Кнопка в меню навигации",
    price: "$1 500",
    month: "месяц",
    rotation: "без ротации",
    text: "Этот формат имеет высокую кликабельность за счет отсутствия ротации и хорошей видимости на любых устройствах. Размещается в верхней части экрана на десктопе и мобайле на всех страницах сайта.",
    image: "images/slide2.jpg",
    alt: "iphone screen image",
    modifier: "banner__item-rotation--none",
  },
  {
    title: "Кнопка Лого х Лого",
    price: "$1 500",
    month: "месяц",
    rotation: "без ротации",
    text: "Отличный формат с высокой кликабельностью и отсутствием ротации поможет повысить узнаваемость бренда рекламодателя и привлечь целевую аудиторию.Размещается в верхней части экрана на десктопе и мобайле на всех страницах сайта.",
    image: "images/slide3.jpg",
    alt: "iphone screen image",
    modifier: "banner__item-rotation--none",
  },
  {
    title: "Баннер в сайдбаре",
    price: "$1500",
    month: "месяц",
    rotation: "4 слота в ротации",
    text: "Самый большой баннер в нашей линейке, который невозможно не заметить. На десктопе: размещается на главной странице и с правой стороны от любого текстового материала. На мобайле - на главной странице и в конце каждой статьи.",
    image: "images/slide4.jpg",
    alt: "ipad image",
  },
  {
    title: "Pop-up",
    price: "$1 500",
    month: "месяц",
    rotation: "4 слота в ротации",
    text: "Баннер, который невозможно не заметить. Появляется спустя 5 секунд после открытия страницы. На Десктопе размещается в нижней левой части экранеНа Мобайле в нижней части экрана",
    image: "images/slide5.jpg",
    alt: "macbook image",
  },
];

// ... (bannerData array remains the same) ...

const bannerSection = document.querySelector(".banner");
const template = document.getElementById("banner__item-template");

// Function to format the price (e.g., "$5500" becomes "$5 500")
const formatPrice = (priceString) => {
  // Basic formatting assuming the format is always $XXXX or $X XXX
  // This looks for the first digit and adds a space after it if followed by 3 more digits
  return priceString.replace(/(\$\d)(\d{3})/, "$1 $2");
};

const createBannerItem = (itemData) => {
  const clone = template.content.cloneNode(true);
  const itemElement = clone.querySelector(".banner__item");

  itemElement.querySelector(".banner__item-title").textContent = itemData.title;

  // FIX: Format the price before assigning the text content
  itemElement.querySelector(".banner__item-price").textContent = formatPrice(
    itemData.price
  );

  itemElement.querySelector(".banner__item-month").textContent = itemData.month;
  itemElement.querySelector(".banner__item-rotation").textContent =
    itemData.rotation;
  itemElement.querySelector(".banner__item-text").textContent = itemData.text;

  const img = itemElement.querySelector(".banner__item-image");
  img.src = itemData.image;
  img.alt = itemData.alt;

  if (itemData.modifier) {
    itemElement
      .querySelector(".banner__item-rotation")
      .classList.add(itemData.modifier);
  }

  return clone;
};

// Use a Document Fragment for performance when appending many items
const fragment = document.createDocumentFragment();
bannerData.forEach((item) => {
  fragment.appendChild(createBannerItem(item));
});
bannerSection.appendChild(fragment);
