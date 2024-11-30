// fetch data from json
fetch('/script/card-data-wm.json') // Changed to card-data-wm.json
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container-wm'); // Updated to card-container-wm

    for (let i = 1; i <= 22; i++) {
      const cardId = `card-wm-${i}`; // Changed card ID format
      const card = createCard(cardId, data, i); // Pass 'i' as index
      cardContainer.appendChild(card);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// create card
function createCard(cardId, data, index) {
  const card = document.createElement('div');
  card.classList.add('card-sarung');
  card.id = cardId;

  // create img in the card
  const image = document.createElement('img');
  image.classList.add('card-img-top');
  image.src = `/img/wm/sarung wm (${index}).jpeg`; // Changed image source
  image.alt = `Sarung wm ${index}`; // Changed alt text

  // create card body for input text
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

  card.addEventListener('mouseover', () => {
    // Adjust z-index of the next card's image
    const nextCard = document.getElementById(`card-wm-${index + 1}`); // Adjusted for new card ID format
    if (nextCard) {
      nextCard.querySelector('.card-img-top').style.zIndex = '2';
    }
  });
  card.addEventListener('mouseout', () => {
    // Reset z-index of the next card's image
    const nextCard = document.getElementById(`card-wm-${index + 1}`); // Adjusted for new card ID format
    if (nextCard) {
      nextCard.querySelector('.card-img-top').style.zIndex = '1';
    }
  });

  return card;
}