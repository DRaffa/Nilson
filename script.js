document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const menuLinks = document.querySelectorAll(".menu a");

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

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

  function initMenuStyles() {
    // Inicializa os estilos do menu quando a página é carregada
    changeMenuStyle();
  }

  window.addEventListener("scroll", changeMenuStyle);
  window.addEventListener("load", initMenuStyles); // Adiciona um evento de carga para garantir a inicialização correta
});
