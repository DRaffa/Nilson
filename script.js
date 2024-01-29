document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const menuLinks = document.querySelectorAll(".menu a");
  
    function changeMenuStyle() {
      const scrollPosition = window.scrollY;
  
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 50;
        const sectionBottom = sectionTop + section.offsetHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          menuLinks.forEach(link => link.classList.remove("active"));
          menuLinks[index].classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", changeMenuStyle);
  });
  