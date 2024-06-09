// Add images to the gallery dynamically
const gallery = document.querySelector('.gallery');

// List of image URLs
const images = [
  'solar.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs as needed
];

images.forEach(image => {
  const imgElement = document.createElement('img');
  imgElement.src = image;
  gallery.appendChild(imgElement);
});