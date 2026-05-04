const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')

    // Clear previous content
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }

    // Create and add the image
    const img = document.createElement('img')
    img.src = image.src
    lightbox.appendChild(img)

    // Create and add the close button
    const closeButton = document.createElement('button')
    closeButton.textContent = '✕'
    closeButton.classList.add('lightbox-close')

    // Add click event to close button
    closeButton.addEventListener('click', () => {
      lightbox.classList.remove('active')
    })

    lightbox.appendChild(closeButton)
  })
})

// Remove the old click handler that closed when clicking outside











// const lightbox = document.createElement('div');
// lightbox.id = 'lightbox';
// document.body.appendChild(lightbox);
//
//
//
// const images = document.querySelectorAll('img')
// images.forEach(image=>{
//   image.addEventListener('click', e => {
//     lightbox.classList.add('active')
//     const img = document.createElement('img')
//     img.src = image.src
//     while (lightbox.firstChild) {
//       lightbox.removeChild(lightbox.firstChild)
//     }
//     lightbox.appendChild(img)
//   })
// })
//
// lightbox.addEventListener('click', e => {
//   if (e.target !== e.currentTarget) return
//   lightbox.classList.remove('active')
// })










// // Create lightbox element
// const lightbox = document.createElement('div');
// lightbox.id = 'lightbox';
// lightbox.className = 'lightbox';
// document.body.appendChild(lightbox);
//
// // Create lightbox content container
// const lightboxContent = document.createElement('div');
// lightboxContent.className = 'lightbox-content';
// lightbox.appendChild(lightboxContent);
//
// // Create close button (X)
// const closeBtn = document.createElement('button');
// closeBtn.className = 'close-btn';
// closeBtn.id = 'closeLightboxBtn';
// closeBtn.innerHTML = '&times;'; // This creates the X symbol
// lightboxContent.appendChild(closeBtn);
//
// // Create image element
// const lightboxImg = document.createElement('img');
// lightboxImg.id = 'lightbox-img';
// lightboxContent.appendChild(lightboxImg);
//
// function openLightbox(index) {
//     currentImageIndex = index;
//     updateLightboxImage();
//     lightbox.classList.add('active');
//     document.body.style.overflow = 'hidden';
// }
//
// function closeLightbox() {
//     lightbox.classList.remove('active');
//     document.body.style.overflow = '';
// }
//
// // Close with X button
// closeBtn.addEventListener('click', closeLightbox);
