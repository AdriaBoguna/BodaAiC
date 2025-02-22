document.addEventListener("DOMContentLoaded", function () {
    const dressItems = document.querySelectorAll(".dress-item");
  
    const showOnScroll = () => {
      dressItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (itemPosition < windowHeight * 0.85) {
          item.classList.add("show");
        }
      });
    };
  
    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Para mostrar elementos visibles al cargar
  });
  
  
  
  