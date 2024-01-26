
// aquí se realizara la logica de interacción del carrousel 
const carrousel= document.querySelector('.carrousel');   
let currentIndex=0;

function showImage(index) {
    carrusel.style.transform = `translateX(${-index * 100}%)`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % 4;
    showImage(currentIndex);
  }
  setInterval(nextImage, 5000);
  export { showImage,nextImage }