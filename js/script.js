let typed = new Typed(".words", {
  strings: ["Frontend Developer!", "MERN Stack Developer!"],
  typedSpeed: 50,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function toggleActiveState() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 0;

    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

function handleClick(event) {
  // event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: "smooth",
    });
  }
}

navLinks.forEach((link) => {
  link.addEventListener("click", handleClick);
});

window.addEventListener("scroll", toggleActiveState);
