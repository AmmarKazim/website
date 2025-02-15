$("header#header").ready(() => {
  const header = document.querySelector("header#header");
  // on .logo clicked
  $("header#header .header .buttons .logo").click((e) => {
    e.preventDefault();
    const href = e.target.getAttribute("data-href");
    // if menu is already expanded, toggle it shrink
    if (header.classList.contains("expand")) {
      toggleMenu();
    }
    // fade-out body and navigate to href
    $("body").fadeOut(1000, () => {
      window.location = href;
    });
  });
  // on <anchor> clicked
  $("header#header .header nav a").click((e) => {
    e.preventDefault();
    const href = e.target.href;
    const id = e.target.id;
    // select newly selected page in menu
    selectNavElement(id);
    // toggle shrink/off the menu
    toggleMenu();
    // fade-out body and navigate to href
    $("body").fadeOut(1000, () => {
      window.location = href;
    });
  });
});

// toggle between menu open/expand or close/shrink
const toggleMenu = () => {
  const header = document.querySelector("header#header");
  if (header.classList.contains("expand")) {
    header.classList.remove("expand");
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
    header.classList.add("expand");
  }
};

const selectNavElement = (element) => {
  let home = document.querySelector("header nav a#home");
  let about = document.querySelector("header nav a#about");
  let skills = document.querySelector("header nav a#skills");
  let projects = document.querySelector("header nav a#projects");
  let blogs = document.querySelector("header nav a#blogs");
  let contact = document.querySelector("header nav a#contact");

  switch (element) {
    default:
      home.className = "active";
      about.className = "";
      skills.className = "";
      projects.className = "";
      blogs.className = "";
      contact.className = "";
      break;

    case "about":
      home.className = "";
      about.className = "active";
      skills.className = "";
      projects.className = "";
      blogs.className = "";
      contact.className = "";
      break;

    case "skills":
      home.className = "";
      about.className = "";
      skills.className = "active";
      projects.className = "";
      blogs.className = "";
      contact.className = "";
      break;

    case "projects":
      home.className = "";
      about.className = "";
      skills.className = "";
      projects.className = "active";
      blogs.className = "";
      contact.className = "";
      break;

    case "blogs":
      home.className = "";
      about.className = "";
      skills.className = "";
      projects.className = "";
      blogs.className = "active";
      contact.className = "";
      break;

    case "contact":
      home.className = "";
      about.className = "";
      skills.className = "";
      projects.className = "";
      blogs.className = "";
      contact.className = "active";
      break;
  }
};
