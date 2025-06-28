document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('imageCarousel');
  const carouselImages = carousel.querySelectorAll('.carousel-image');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  let currentIndex = 0;
  
  // Hide all images except the first one
  function initCarousel() {
    carouselImages.forEach((img, index) => {
      img.style.display = index === 0 ? 'block' : 'none';
    });
  }
  
  function showImage(index) {
    // Hide current image
    carouselImages[currentIndex].style.display = 'none';
    
    // Update index and show new image
    currentIndex = index;
    carouselImages[currentIndex].style.display = 'block';
  }
  
  // Event listeners
  nextBtn.addEventListener('click', () => {
    let newIndex = (currentIndex + 1) % carouselImages.length;
    showImage(newIndex);
  });
  
  prevBtn.addEventListener('click', () => {
    let newIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(newIndex);
  });
  
  // Initialize carousel
  initCarousel();
});

