// Injetar HTML da navbar
fetch("/navbar/index_navbar.html")
  .then(res => res.text())
  .then(data => {
    const navbarContainer = document.createElement("div");
    navbarContainer.innerHTML = data;
    document.body.insertBefore(navbarContainer, document.body.firstChild);
  });

// Injetar CSS da navbar
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "/navbar/style_navbar.css";
document.head.appendChild(link);