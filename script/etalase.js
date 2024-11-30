// Show the image loader
function showImageLoader() {
  const loader = document.querySelector('.image-loader');
  if (loader) {
      loader.style.display = 'block'; // Show loader
  }
}

// Hide the image loader
function hideImageLoader() {
  const loader = document.querySelector('.image-loader');
  if (loader) {
      loader.style.display = 'none'; // Hide loader
  }
}

// Fetch data from JSON
fetch('/script/card-data.json')
  .then(response => response.json())
  .then(data => {
      const cardContainer = document.getElementById('men-card');
      showImageLoader(); // Show loader before loading images

      const promises = []; // Array to hold image loading promises

      for (let i = 1; i <= 22; i++) {
          const cardId = `card-${i}`;
          const card = createCard(cardId, data);
          cardContainer.appendChild(card);

          // Push the image loading promise to the array
          const img = card.querySelector('.card-img-top');
          const imgPromise = new Promise((resolve) => {
              img.onload = () => resolve(); // Resolve when image is loaded
              img.onerror = () => resolve(); // Resolve on error as well
          });
          promises.push(imgPromise);
      }

      // Wait for all images to load
      Promise.all(promises).then(() => {
          hideImageLoader(); // Hide loader after all images are loaded
      });
  })
  .catch(error => {
      console.error('Error fetching data:', error);
      hideImageLoader(); // Ensure loader is hidden in case of error
  });

// Create card
function createCard(cardId, data, index) {
  const card = document.createElement('div');
  card.classList.add('card-sarung');
  card.id = cardId;

  // Create img in the card
  const image = document.createElement('img');
  image.classList.add('card-img-top');
  image.loading = 'lazy';
  image.src = `/img/sarung (${cardId.split('-')[1]}).jpeg`;
  image.alt = `Sarung ${cardId.split('-')[1]}`;

  // Create card body for input text
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardData = data.find(card => card.cardId === cardId);

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = cardData.cardText;

  const cardPrice = document.createElement('p');
  cardPrice.classList.add('card-price');
  cardPrice.textContent = cardData.cardPrice;

  const cardPriced = document.createElement('p');
  cardPriced.classList.add('card-priced'); 
  cardPriced.textContent = cardData.cardPriced;

  card.appendChild(image);
  cardBody.appendChild(cardPriced);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);

  let hoveredCardIndex = 1;

  card.addEventListener('mouseover', () => {
      // If a different card is currently hovered, reset its z-index
      if (hoveredCardIndex !== index) {
          const prevCard = document.getElementById(`card-${hoveredCardIndex}`);
          if (prevCard) {
              prevCard.querySelector('.card-img-top').style.zIndex = '2';
          }
      }

      // Set the current card as the hovered card and increase its z-index
      hoveredCardIndex = index;
      const nextCard = document.getElementById(`card-${index + 1}`);
      if (nextCard) {
          nextCard.querySelector('.card-img-top').style.zIndex = '1';
      }
  });

  card.addEventListener('mouseout', () => {
      // Reset the hovered card index if the mouse leaves the current card
      if (hoveredCardIndex === index) {
          hoveredCardIndex = 1;
      }
  });

  return card;
}