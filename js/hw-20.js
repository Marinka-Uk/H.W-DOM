document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    let currentIndex = 0;
  
    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') {
        showImage(currentIndex - 1);
      } else if (event.key === 'ArrowRight') {
        showImage(currentIndex + 1);
      }
    });
  
    function showImage(index) {
      const fullImageContainer = document.querySelector('.full-image-container');
      const fullImage = document.querySelector('.full-image');
  
      if (index < 0) {
        index = images.length - 1;
      } else if (index >= images.length) {
        index = 0;
      }
  
      currentIndex = index;
      const imageUrl = images[index].getAttribute('src');
      fullImage.setAttribute('src', imageUrl);
      fullImageContainer.style.display = 'block';
    }
  
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
      const fullImageContainer = document.querySelector('.full-image-container');
      fullImageContainer.style.display = 'none';
    });
  });
  