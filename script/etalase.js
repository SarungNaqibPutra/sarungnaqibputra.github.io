// fetch data from json
fetch('/script/card-data.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container');

    for (let i = 1; i <= 22; i++) {
      const cardId = `card-${i}`;
      const card = createCard(cardId, data);
      cardContainer.appendChild(card);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
function createCard(cardId, data, index) {
  const card = document.createElement('div');
  card.classList.add('card-sarung');
  card.id = cardId;

  // Create img in the card with responsive srcset
  const image = document.createElement('img');
  image.classList.add('card-img-top');
  
  // Set srcset for responsive images
  image.srcset = `
    /img/sarung (${cardId.split('-')[1]}-small).jpeg 320w,
    /img/sarung (${cardId.split('-')[1]}-medium).jpeg 640w,
    /img/sarung (${cardId.split('-')[1]}-large).jpeg 1024w
  `;
  
  image.sizes = '(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'; // Adjust sizes based on your layout
  image.src = `/img/sarung (${cardId.split('-')[1]}-large).jpeg`; // Fallback for browsers that do not support srcset
  image.alt = `Sarung ${cardId.split('-')[1]}`;
  image.loading = "lazy"; // Enable lazy loading

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

  // Event listeners for mouseover and mouseout
  card.addEventListener('mouseover', () => {
    const nextCard = document.getElementById(`card-${index + 1}`);
    if (nextCard) {
      nextCard.querySelector('.card-img-top').style.zIndex = '2';
    }
  });
  card.addEventListener('mouseout', () => {
    const nextCard = document.getElementById(`card-${index + 1}`);
    if (nextCard) {
      nextCard.querySelector('.card-img-top').style.zIndex = '1';
    }
  });

  return card;
}