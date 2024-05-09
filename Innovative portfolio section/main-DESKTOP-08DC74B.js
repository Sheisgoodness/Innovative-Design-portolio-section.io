function openLightbox(imageUrl) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageUrl; // Set the source of the lightbox image
    lightbox.style.display = 'flex'; // Change display to 'flex' to show the lightbox
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
}
