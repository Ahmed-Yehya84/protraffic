const menuToggle = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".header__nav");

if (menuToggle) {
  // ... (Menu toggle logic) ...
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    // Toggle ARIA attribute
    menuToggle.setAttribute("aria-expanded", !isExpanded);

    // Toggle the class on the nav (for showing/hiding the menu content)
    nav.classList.toggle("header__nav--active");

    // Toggle the class on the button itself (for the "X" animation)
    menuToggle.classList.toggle("header__menu-toggle--active");
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".header__nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("header__nav--active");
      //  Remove the active class from the button when a link is clicked
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

// Function to format the price
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
    // Save the current language preference
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

document.addEventListener("DOMContentLoaded", () => {
  // Determine the current language based on the HTML file name (index.html or index-en.html)
  let currentLanguage = "ru"; // Default to Russian

  if (window.location.pathname.includes("index-en.html")) {
    currentLanguage = "en";
  }

  loadLanguageData(currentLanguage);
});
// --------------------------------------------------
// Hero Section Animations
// --------------------------------------------------

const heroSection = document.querySelector(".hero");

if (window.innerWidth >= 1200) {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      heroSection.classList.add("hero--animate-title");
    }, 500);

    setTimeout(() => {
      heroSection.classList.add("hero--animate-logo");
    }, 1200);
  });
}
