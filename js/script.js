// ================= THEME TOGGLE =================

const themeToggleBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggleBtn.checked = true;
}

themeToggleBtn.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});


// ================= VISITOR NAME STATE =================

const visitorNameInput = document.getElementById("visitorName");
const saveNameBtn = document.getElementById("saveNameBtn");
const greetingMessage = document.getElementById("greetingMessage");

// Load saved visitor name
const savedVisitorName = localStorage.getItem("visitorName");

if (savedVisitorName) {
    greetingMessage.textContent = `Welcome back, ${savedVisitorName}!`;
    visitorNameInput.value = savedVisitorName;
}

saveNameBtn.addEventListener("click", () => {
    const name = visitorNameInput.value.trim();

    if (name === "") {
        greetingMessage.textContent = "Please enter your name first.";
        return;
    }

    localStorage.setItem("visitorName", name);
    greetingMessage.textContent = `Welcome, ${name}!`;
});


// ================= CONTACT FORM VALIDATION =================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Message submitted successfully.";
    formMessage.style.color = "green";

    contactForm.reset();
});


// ================= PROJECT SEARCH / FILTER / SORT =================

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortProjects = document.getElementById("sortProjects");
const projectsGrid = document.querySelector(".projects-grid");
const noResultsMessage = document.getElementById("noResultsMessage");
const loadingMessage = document.getElementById("loadingMessage");

// Store project cards in an array
let projectCards = Array.from(document.querySelectorAll(".project-card"));

function updateProjects() {
    loadingMessage.classList.remove("hidden");

    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedSort = sortProjects.value;

    let visibleCards = [...projectCards];

    // Filter by category
    if (selectedCategory !== "all") {
        visibleCards = visibleCards.filter(card =>
            card.dataset.category === selectedCategory
        );
    }

    // Filter by search text
    visibleCards = visibleCards.filter(card =>
        card.textContent.toLowerCase().includes(searchText)
    );

    // Sort cards
    if (selectedSort === "az") {
        visibleCards.sort((a, b) => {
            const titleA = a.querySelector("h3").textContent.toLowerCase();
            const titleB = b.querySelector("h3").textContent.toLowerCase();
            return titleA.localeCompare(titleB);
        });
    } else if (selectedSort === "za") {
        visibleCards.sort((a, b) => {
            const titleA = a.querySelector("h3").textContent.toLowerCase();
            const titleB = b.querySelector("h3").textContent.toLowerCase();
            return titleB.localeCompare(titleA);
        });
    }

    // Hide all cards first
    projectCards.forEach(card => {
        card.style.display = "none";
    });

    // Show sorted + filtered cards
    visibleCards.forEach(card => {
        card.style.display = "block";
        projectsGrid.appendChild(card);
    });

    // Show / hide no results message
    if (visibleCards.length === 0) {
        noResultsMessage.classList.remove("hidden");
    } else {
        noResultsMessage.classList.add("hidden");
    }

    loadingMessage.classList.add("hidden");
}

searchInput.addEventListener("input", updateProjects);
categoryFilter.addEventListener("change", updateProjects);
sortProjects.addEventListener("change", updateProjects);


// ================= GITHUB API INTEGRATION =================

const repoList = document.getElementById("repoList");
const repoLoadingMessage = document.getElementById("repoLoadingMessage");
const repoErrorMessage = document.getElementById("repoErrorMessage");

// Replace this username with your actual GitHub username
const githubUsername = "memnt01F";

async function loadGitHubRepos() {
    try {
        repoLoadingMessage.classList.remove("hidden");
        repoErrorMessage.classList.add("hidden");

        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);

        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }

        const repos = await response.json();

        repoLoadingMessage.classList.add("hidden");

        // Show only first 6 repos
        const topRepos = repos.slice(0, 6);

        topRepos.forEach(repo => {
            const repoCard = document.createElement("div");
            repoCard.classList.add("repo-card");

            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : "No description available."}</p>
                <a href="${repo.html_url}" target="_blank">View Repository</a>
            `;

            repoList.appendChild(repoCard);
        });

    } catch (error) {
        repoLoadingMessage.classList.add("hidden");
        repoErrorMessage.classList.remove("hidden");
    }
}

loadGitHubRepos();
