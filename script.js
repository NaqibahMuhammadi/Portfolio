// Click events for buttons
const project = document.getElementById("project");
const projectBtn = document.getElementById("project-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

projectBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  project.style.display = "flex";
  skillsBtn.classList.remove("active-btn");
  projectBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  project.style.display = "none";
  projectBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
});

// Light & Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const whatsappLogo = document.querySelector('img[alt="whatsapp icon"]');
  const emailLogo = document.querySelector('img[alt="email logo"]');

  const lightLogos = {
    whatsapp: "assets/whatsapp_light.png",
    email: "assets/email_light.png",
    theme: "assets/theme_light.png",
  };

  const darkLogos = {
    whatsapp: "assets/whatsapp_dark.png",
    email: "assets/email_dark.png",
    theme: "assets/theme_dark.png",
  };

  function setTheme(isDark) {
    whatsappLogo.src = isDark ? darkLogos.whatsapp : lightLogos.whatsapp;
    emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
  }

  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);

    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);

    setTheme(isDark);
  };

  // Load saved theme from local storage or default to light theme
  loadTheme();
});