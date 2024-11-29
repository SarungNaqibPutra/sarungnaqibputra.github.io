// Get all carousel items
const carouselItems = document.querySelectorAll('.carousel-item');

// Array of image filenames
const imageFilenames = [
  '/img/sarung (1).jpeg',
    '/img/sarung (2).jpeg',
    '/img/sarung (3).jpeg',
    '/img/sarung (4).jpeg',
    '/img/sarung (5).jpeg',
    '/img/sarung (6).jpeg',
    '/img/sarung (7).jpeg',
    '/img/sarung (8).jpeg',
    '/img/sarung (9).jpeg',
    '/img/sarung (10).jpeg',
    '/img/sarung (11).jpeg',
    '/img/sarung (12).jpeg',
    '/img/sarung (13).jpeg',
    '/img/sarung (14).jpeg',
    '/img/sarung (15).jpeg',
    '/img/sarung (16).jpeg',
    '/img/sarung (17).jpeg',
    '/img/sarung (18).jpeg',
    '/img/sarung (19).jpeg',
    '/img/sarung (20).jpeg',
    '/img/sarung (21).jpeg',
    '/img/sarung (22).jpeg'
];

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the image filenames
shuffleArray(imageFilenames);

// Assign random image sources to carousel items
carouselItems.forEach((item, index) => {
  const img = item.querySelector('img');
  img.src = `${imageFilenames[index]}`;
});

