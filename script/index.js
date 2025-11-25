// // const menuToggle = document.querySelector(".header__menu-toggle");
// // const nav = document.querySelector(".header__nav");

// // if (menuToggle) {
// //   menuToggle.addEventListener("click", () => {
// //     const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
// //     menuToggle.setAttribute("aria-expanded", !isExpanded);
// //     nav.classList.toggle("header__nav--active");
// //   });

// //   // Close menu when a link is clicked
// //   document.querySelectorAll(".header__nav-link").forEach((link) => {
// //     link.addEventListener("click", () => {
// //       menuToggle.setAttribute("aria-expanded", "false");
// //       nav.classList.remove("header__nav--active");
// //     });
// //   });
// // }

// const menuToggle = document.querySelector(".header__menu-toggle");
// const nav = document.querySelector(".header__nav");

// if (menuToggle) {
//   menuToggle.addEventListener("click", () => {
//     const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

//     // Toggle ARIA attribute
//     menuToggle.setAttribute("aria-expanded", !isExpanded);

//     // Toggle the class on the nav (for showing/hiding the menu content)
//     nav.classList.toggle("header__nav--active");

//     // NEW: Toggle the class on the button itself (for the "X" animation)
//     menuToggle.classList.toggle("header__menu-toggle--active");
//   });

//   // Close menu when a link is clicked
//   document.querySelectorAll(".header__nav-link").forEach((link) => {
//     link.addEventListener("click", () => {
//       menuToggle.setAttribute("aria-expanded", "false");
//       nav.classList.remove("header__nav--active");
//       // NEW: Remove the active class from the button when a link is clicked
//       menuToggle.classList.remove("header__menu-toggle--active");
//     });
//   });
// }

// // logic for banner section
// const bannerData = [
//   {
//     title: "Брендирование сайта",
//     price: "$5500",
//     month: "месяц",
//     rotation: "2 слота в ротации",
//     text: "Самый большой и кликабельный рекламный формат, отображающийся на всех страницах сайта на десктопе и мобайле и дабщий возможность привлечь максимум целевой аудитории.",
//     image: "images/slide1.jpg",
//     alt: "laptop image",
//   },
//   {
//     title: "Кнопка в меню навигации",
//     price: "$1 500",
//     month: "месяц",
//     rotation: "без ротации",
//     text: "Этот формат имеет высокую кликабельность за счет отсутствия ротации и хорошей видимости на любых устройствах. Размещается в верхней части экрана на десктопе и мобайле на всех страницах сайта.",
//     image: "images/slide2.jpg",
//     alt: "iphone screen image",
//     modifier: "banner__item-rotation--none",
//   },
//   {
//     title: "Кнопка Лого х Лого",
//     price: "$1 500",
//     month: "месяц",
//     rotation: "без ротации",
//     text: "Отличный формат с высокой кликабельностью и отсутствием ротации поможет повысить узнаваемость бренда рекламодателя и привлечь целевую аудиторию.Размещается в верхней части экрана на десктопе и мобайле на всех страницах сайта.",
//     image: "images/slide3.jpg",
//     alt: "iphone screen image",
//     modifier: "banner__item-rotation--none",
//   },
//   {
//     title: "Баннер в сайдбаре",
//     price: "$1500",
//     month: "месяц",
//     rotation: "4 слота в ротации",
//     text: "Самый большой баннер в нашей линейке, который невозможно не заметить. На десктопе: размещается на главной странице и с правой стороны от любого текстового материала. На мобайле - на главной странице и в конце каждой статьи.",
//     image: "images/slide4.jpg",
//     alt: "ipad image",
//   },
//   {
//     title: "Pop-up",
//     price: "$1 500",
//     month: "месяц",
//     rotation: "4 слота в ротации",
//     text: "Баннер, который невозможно не заметить. Появляется спустя 5 секунд после открытия страницы. На Десктопе размещается в нижней левой части экранеНа Мобайле в нижней части экрана",
//     image: "images/slide5.jpg",
//     alt: "macbook image",
//   },
// ];

// // ... (bannerData array remains the same) ...

// const bannerSection = document.querySelector(".banner");
// const template = document.getElementById("banner__item-template");

// // Function to format the price (e.g., "$5500" becomes "$5 500")
// const formatPrice = (priceString) => {
//   // Basic formatting assuming the format is always $XXXX or $X XXX
//   // This looks for the first digit and adds a space after it if followed by 3 more digits
//   return priceString.replace(/(\$\d)(\d{3})/, "$1 $2");
// };

// const createBannerItem = (itemData) => {
//   const clone = template.content.cloneNode(true);
//   const itemElement = clone.querySelector(".banner__item");

//   itemElement.querySelector(".banner__item-title").textContent = itemData.title;

//   // FIX: Format the price before assigning the text content
//   itemElement.querySelector(".banner__item-price").textContent = formatPrice(
//     itemData.price
//   );

//   itemElement.querySelector(".banner__item-month").textContent = itemData.month;
//   itemElement.querySelector(".banner__item-rotation").textContent =
//     itemData.rotation;
//   itemElement.querySelector(".banner__item-text").textContent = itemData.text;

//   const img = itemElement.querySelector(".banner__item-image");
//   img.src = itemData.image;
//   img.alt = itemData.alt;

//   if (itemData.modifier) {
//     itemElement
//       .querySelector(".banner__item-rotation")
//       .classList.add(itemData.modifier);
//   }

//   return clone;
// };

// // Use a Document Fragment for performance when appending many items
// const fragment = document.createDocumentFragment();
// bannerData.forEach((item) => {
//   fragment.appendChild(createBannerItem(item));
// });
// bannerSection.appendChild(fragment);

const menuToggle = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".header__nav");

if (menuToggle) {
  // ... (Menu toggle logic remains the same) ...
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

// --------------------------------------------------
// Language and Banner Section Logic
// --------------------------------------------------

const bannerSection = document.querySelector(".banner");
const template = document.getElementById("banner__item-template");
const languageButtons = document.querySelectorAll("[data-language-switcher]"); // Select all language buttons

// Function to format the price (remains the same)
const formatPrice = (priceString) => {
  return priceString.replace(/(\$\d)(\d{3})/, "$1 $2");
};

// Function to create a banner item from data
const createBannerItem = (itemData) => {
  const clone = template.content.cloneNode(true);
  const itemElement = clone.querySelector(".banner__item");

  itemElement.querySelector(".banner__item-title").textContent = itemData.title;
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

// Function to render the banner section with specific data
const renderBanner = (data) => {
  // Clear existing items first
  bannerSection.innerHTML = "";

  const fragment = document.createDocumentFragment();
  data.forEach((item) => {
    fragment.appendChild(createBannerItem(item));
  });
  bannerSection.appendChild(fragment);
};

// Function to fetch data and render
const loadLanguageData = async (languageCode) => {
  try {
    const response = await fetch(`./data/${languageCode}.json`);
    const data = await response.json();
    renderBanner(data);
    // Save the current language preference (optional, but good practice)
    localStorage.setItem("userLanguage", languageCode);
  } catch (error) {
    console.error("Error loading language data:", error);
  }
};

// --------------------------------------------------
// Language Switcher Event Listeners
// --------------------------------------------------

languageButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    // Get the target language code (e.g., 'en' or 'ru')
    const targetLanguage = button.getAttribute("data-language-switcher");

    // Determine which HTML file to navigate to
    if (targetLanguage === "en") {
      window.location.href = "index-en.html";
    } else if (targetLanguage === "ru") {
      window.location.href = "index.html";
    }
  });
});

// --------------------------------------------------
// Initial Load
// --------------------------------------------------

// Check local storage for a preferred language, otherwise default to Russian 'ru'
// const initialLanguage = localStorage.getItem("userLanguage") || "ru";
// console.log(initialLanguage);
// loadLanguageData(initialLanguage);

// document.documentElement.lang = initialLanguage;
document.addEventListener("DOMContentLoaded", () => {
  // Determine the current language based on the HTML file name (index.html or index-en.html)
  let currentLanguage = "ru"; // Default to Russian

  if (window.location.pathname.includes("index-en.html")) {
    currentLanguage = "en"; // If we are on the English page file
  }
  // Alternatively, check the <html> lang attribute:
  // const currentLanguage = document.documentElement.lang || 'ru';

  // Load the correct data file for the current page's language
  loadLanguageData(currentLanguage);
});
