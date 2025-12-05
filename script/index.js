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
  // We don't use cloneNode here anymore as we are manually building innerHTML
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("banner__item");

  // Use a template literal with conditional logic (ternary operator)
  cardDiv.innerHTML = `
    <div class="banner__item-content">
      <h3 class="banner__item-title">${itemData.title}</h3>
      <div class="banner__item-subscription">
        <h4 class="banner__item-price">${formatPrice(itemData.price)}</h4>
        <div class="banner__item-options">
          <p class="banner__item-month">${itemData.month}</p>
          <p class="banner__item-rotation">${itemData.rotation}</p>
        </div>
      </div>
      <p class="banner__item-text">${itemData.text}</p>
      
      <!-- FIX: Conditional Check for second paragraph -->
      ${
        itemData["second-text"]
          ? `<p class="banner__item-text banner__item-text--secondary">${itemData["second-text"]}</p>`
          : ""
      }
      
    </div>
    <div class="banner__item-image-wrapper">
      <img class="banner__item-image" src="${itemData.image}" alt="${
    itemData.alt
  }" />
    </div>
  `;

  // We need to re-select the rotation element to apply the modifier after the innerHTML is set
  if (itemData.modifier) {
    // Find the element within the just-created cardDiv
    const rotationElement = cardDiv.querySelector(".banner__item-rotation");
    if (rotationElement) {
      rotationElement.classList.add(itemData.modifier);
    }
  }

  // NOTE: We return the cardDiv element instead of the template clone
  return cardDiv;
};

// Function to render the banner section with specific data
const renderBanner = (data) => {
  // Clear existing items first
  bannerSection.innerHTML = "";

  // We no longer need document fragments as innerHTML is managed within the create function
  data.forEach((item) => {
    bannerSection.appendChild(createBannerItem(item));
  });
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
