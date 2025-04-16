function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var typed = new Typed('#element', {
    strings: ["Oluwasegun D. Idowu"],
    typeSpeed: 50,
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // remove when out of view
      }
    });
}, {
    threshold: 0.1 // triggers when 10% of the section is visible
});

document.querySelectorAll('.fade-section').forEach((el) => {
    observer.observe(el);
});
