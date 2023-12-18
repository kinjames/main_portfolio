let typed = new Typed(".words", {
  strings: ["Frontend Developer!", "MERN Stack Developer!"],
  typedSpeed: 50,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

const navLinks = document.querySelectorAll(".nav-link");
function handleClick(event) {
  // Prevent the default behavior of anchor links
  event.preventDefault();

  // Remove active class from all links
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to the clicked link
  event.target.classList.add("active");
}

// Attach click event listeners to all navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", handleClick);
});
