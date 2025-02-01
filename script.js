document.addEventListener("DOMContentLoaded", () => {
  // Default FAQ Questions
  const defaultFaqs = [
    { question: "What is this token?", answer: "This token is a revolutionary memecoin designed for fun and community engagement." },
    { question: "How can I buy this token?", answer: "You can purchase this token by connecting your wallet and swapping SOL on a DEX." },
    { question: "What is the roadmap?", answer: "Our roadmap includes marketing, partnerships, and future developments." },
    { question: "Is this token safe?", answer: "We have taken steps to ensure security, but always do your own research." },
  ];

  // Default How to Buy Steps
  const defaultHowToBuySteps = [
    { title: "Create a wallet", description: "Download a wallet like Phantom or Solflare to manage your tokens." },
    { title: "Fund your wallet", description: "Add SOL to your wallet using an exchange like Binance or Coinbase." },
    { title: "Connect to the DEX", description: "Visit a decentralized exchange (DEX) and connect your wallet." },
    { title: "Swap SOL", description: "Use the DEX to swap SOL for your memecoin." },
  ];

  // Gradient Pickers
  const gradient1Picker = document.getElementById("gradient1");
  const gradient2Picker = document.getElementById("gradient2");
  const previewHero = document.querySelector(".preview-hero");

  gradient1Picker.addEventListener("input", updateHeroGradient);
  gradient2Picker.addEventListener("input", updateHeroGradient);

  function updateHeroGradient() {
    const gradient1 = gradient1Picker.value;
    const gradient2 = gradient2Picker.value;
    previewHero.style.background = `linear-gradient(135deg, ${gradient1}, ${gradient2})`;
  }

  // Site Theme Swatches
  const themeSwatches = document.querySelectorAll(".theme-swatch");
  const body = document.body;

  themeSwatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      const themeClass = swatch.getAttribute("data-theme");
      body.className = ""; // Clear existing themes
      body.classList.add(themeClass);
    });
  });

  // FAQ Section
  const faqSection = document.getElementById("faqSection");
  const useDefaultFaqCheckbox = document.getElementById("useDefaultFaq");
  const addFaqButton = document.getElementById("addFaqItem");

  function addFaqItem(question = "", answer = "") {
    const faqCount = faqSection.querySelectorAll("textarea").length + 1;

    const faqContainer = document.createElement("div");
    faqContainer.classList.add("faq-item");
    faqContainer.style.marginBottom = "1rem";

    const questionLabel = document.createElement("label");
    questionLabel.textContent = `FAQ Question ${faqCount}`;
    faqContainer.appendChild(questionLabel);

    const questionInput = document.createElement("input");
    questionInput.type = "text";
    questionInput.placeholder = "Enter question";
    questionInput.value = question;
    questionInput.style.marginBottom = "0.5rem";
    faqContainer.appendChild(questionInput);

    const answerLabel = document.createElement("label");
    answerLabel.textContent = `FAQ Answer ${faqCount}`;
    faqContainer.appendChild(answerLabel);

    const answerTextarea = document.createElement("textarea");
    answerTextarea.rows = 3;
    answerTextarea.placeholder = "Enter answer";
    answerTextarea.value = answer;
    faqContainer.appendChild(answerTextarea);

    faqSection.appendChild(faqContainer);
  }

  useDefaultFaqCheckbox.addEventListener("change", (event) => {
    faqSection.innerHTML = ""; // Clear existing FAQ items
    if (event.target.checked) {
      defaultFaqs.forEach(({ question, answer }) => addFaqItem(question, answer));
    }
  });

  addFaqButton.addEventListener("click", () => addFaqItem());

  // How to Buy Section
  const howToBuySection = document.getElementById("howToBuySection");
  const useDefaultHowToBuyCheckbox = document.getElementById("useDefaultHowToBuy");
  const addHowToBuyStepButton = document.getElementById("addHowToBuyStep");

  function addHowToBuyStep(title = "", description = "") {
    const stepCount = howToBuySection.querySelectorAll(".how-to-buy-step").length + 1;

    const stepContainer = document.createElement("div");
    stepContainer.classList.add("how-to-buy-step");
    stepContainer.style.marginBottom = "1rem";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = `Step ${stepCount} Title`;
    stepContainer.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Enter step title";
    titleInput.value = title;
    titleInput.style.marginBottom = "0.5rem";
    stepContainer.appendChild(titleInput);

    const descLabel = document.createElement("label");
    descLabel.textContent = `Step ${stepCount} Description`;
    stepContainer.appendChild(descLabel);

    const descTextarea = document.createElement("textarea");
    descTextarea.rows = 3;
    descTextarea.placeholder = "Enter step description";
    descTextarea.value = description;
    stepContainer.appendChild(descTextarea);

    howToBuySection.appendChild(stepContainer);
  }

  useDefaultHowToBuyCheckbox.addEventListener("change", (event) => {
    howToBuySection.innerHTML = ""; // Clear existing steps
    if (event.target.checked) {
      defaultHowToBuySteps.forEach(({ title, description }) => addHowToBuyStep(title, description));
    }
  });

  addHowToBuyStepButton.addEventListener("click", () => addHowToBuyStep());

  // Roadmap Section
  const roadmapSection = document.getElementById("roadmapSection");
  const addRoadmapButton = document.getElementById("addRoadmapItem");

  function addRoadmapItem(title = "", description = "") {
    const roadmapCount = roadmapSection.querySelectorAll(".roadmap-item").length + 1;

    const roadmapContainer = document.createElement("div");
    roadmapContainer.classList.add("roadmap-item");
    roadmapContainer.style.marginBottom = "1rem";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = `Roadmap Item ${roadmapCount} Title`;
    roadmapContainer.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Enter roadmap item title";
    titleInput.value = title;
    titleInput.style.marginBottom = "0.5rem";
    roadmapContainer.appendChild(titleInput);

    const descLabel = document.createElement("label");
    descLabel.textContent = `Roadmap Item ${roadmapCount} Description`;
    roadmapContainer.appendChild(descLabel);

    const descTextarea = document.createElement("textarea");
    descTextarea.rows = 3;
    descTextarea.placeholder = "Enter roadmap item description";
    descTextarea.value = description;
    roadmapContainer.appendChild(descTextarea);

    roadmapSection.appendChild(roadmapContainer);
  }

  addRoadmapButton.addEventListener("click", () => addRoadmapItem());
});

document.addEventListener("DOMContentLoaded", () => {
  const subdomainInput = document.getElementById("customSubdomain");
  const domainExtensionSelect = document.getElementById("domainExtension");
  const domainStatus = document.getElementById("domainStatus");

  // Simulated API for domain availability check
  const takenDomains = ["example.memecoin.site", "test.memeonsolana.xyz"];

  function checkDomainAvailability(subdomain, extension) {
    const fullDomain = `${subdomain}.${extension}`;
    return !takenDomains.includes(fullDomain);
  }

  function updateDomainStatus() {
    const subdomain = subdomainInput.value.trim();
    const extension = domainExtensionSelect.value;

    if (!subdomain) {
      domainStatus.innerHTML = "";
      return;
    }

    const fullDomain = `${subdomain}.${extension}`;
    const isAvailable = checkDomainAvailability(subdomain, extension);

    if (isAvailable) {
      domainStatus.innerHTML = `
        <span class="available">✔</span> <span>${fullDomain}</span>
      `;
      domainStatus.classList.remove("taken");
      domainStatus.classList.add("available");
    } else {
      domainStatus.innerHTML = `
        <span class="taken">✖</span> <span>${fullDomain}</span>
      `;
      domainStatus.classList.remove("available");
      domainStatus.classList.add("taken");
    }
  }

  subdomainInput.addEventListener("input", updateDomainStatus);
  domainExtensionSelect.addEventListener("change", updateDomainStatus);
});

let tokenomicsData = [];
let tokenomicsChart;

function addTokenomicsField() {
  const container = document.getElementById("tokenomicsFields");
  const div = document.createElement("div");
  div.className = "tokenomics-entry";
  div.innerHTML = `
    <input type="text" placeholder="Category" class="category">
    <input type="number" placeholder="% Allocation" class="percentage" min="1" max="100" oninput="updateChart()">
    <button type="button" onclick="removeTokenomicsField(this)">
      <i class="fas fa-trash-alt"></i>
    </button>
  `;
  container.appendChild(div);
  updateChart();
}

function removeTokenomicsField(button) {
  button.parentElement.remove();
  updateChart();
}

function removeTokenomicsField(button) {
  button.parentElement.remove();
  updateChart();
}

function updateChart() {
  const categories = document.querySelectorAll(".category");
  const percentages = document.querySelectorAll(".percentage");
  tokenomicsData = [];

  let total = 0;
  categories.forEach((cat, index) => {
    const name = cat.value || `Category ${index + 1}`;
    const value = parseFloat(percentages[index].value) || 0;
    if (value > 0) {
      tokenomicsData.push({ name, value });
      total += value;
    }
  });

  if (total > 100) {
    alert("Total allocation cannot exceed 100%");
    return;
  }

  renderChart();
}

function renderChart() {
  const ctx = document.getElementById("tokenomicsChart").getContext("2d");
  if (tokenomicsChart) tokenomicsChart.destroy();

  const selectedTheme = document.querySelector(".site-theme .selected"); // Get selected theme
  let themeColors = getThemeColors(selectedTheme ? selectedTheme.dataset.theme : "default");

  tokenomicsChart = new Chart(ctx, {
    type: "pie",
    options: {
      responsive: true,
      maintainAspectRatio: true,  // Ensure it keeps its shape
      aspectRatio: 1,             // Force a 1:1 square aspect ratio
    },
    data: {
      labels: tokenomicsData.map(item => item.name),
      datasets: [{
        data: tokenomicsData.map(item => item.value),
        backgroundColor: themeColors,
      }]
    }
  });
}

function getThemeColors(theme) {
  const colorThemes = {
    "dark-purple": ["#6a0dad", "#8e44ad", "#9b59b6", "#bdc3c7"],
    "dark-orange": ["#e67e22", "#d35400", "#f39c12", "#f1c40f"],
    "dark-green": ["#2ecc71", "#27ae60", "#16a085", "#1abc9c"],
    "dark-blue": ["#3498db", "#2980b9", "#34495e", "#2c3e50"],
    "light-purple": ["#c39bd3", "#d7bde2", "#e8daef", "#f5eef8"],
    "light-orange": ["#f5b041", "#f8c471", "#f9e79f", "#fcf3cf"],
    "light-green": ["#a9dfbf", "#82e0aa", "#abebc6", "#d5f5e3"],
    "light-blue": ["#85c1e9", "#5dade2", "#3498db", "#2874a6"],
    "default": ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"]
  };

  return colorThemes[theme] || colorThemes["default"];
}

document.addEventListener("DOMContentLoaded", () => {
    const createButton = document.getElementById("createWebsiteButton");
    const disclaimerCheckbox = document.getElementById("confirmDisclaimer");

    // Disable button by default
    createButton.disabled = true;
    createButton.style.opacity = "0.5"; // Make it look inactive

    disclaimerCheckbox.addEventListener("change", () => {
        if (disclaimerCheckbox.checked) {
            createButton.disabled = false;
            createButton.style.opacity = "1";
        } else {
            createButton.disabled = true;
            createButton.style.opacity = "0.5";
        }
    });
});

