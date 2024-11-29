// fetch data from json
fetch('/script/card-data.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container');

    for (let i = 1; i <= 22; i++) {
      const cardId = `card-${i}`;
      const card = createCard(cardId, data, i); // Pass index i
      cardContainer.appendChild(card);
    }

    // Set up the Intersection Observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target.querySelector('img');
          img.src = img.dataset.src; // Set the src from data-src
          observer.unobserve(entry.target); // Stop observing after loading
        }
      });
    });

    // Observe each card for lazy loading
    const cards = document.querySelectorAll('.card-sarung');
    cards.forEach(card => {
      observer.observe(card);
    });
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
  image.dataset.src = `/img/sarung (${cardId.split('-')[1]}).jpeg`; // Use data-src for lazy loading
  image.alt = `Sarung ${cardId.split('-')[1]}`;

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
    const nextCard = document.getElementById(`card-${index + 1}`);
    if (nextCard) {
      nextCard.querySelector('.card-img-top').style.zIndex = '2';
    }
  });
  card.addEventListener('mouseout', () => {
    // Reset z-index of the next card's image
    const nextCard = document.getElementById(`card-${index + 1}`);
    if (nextCard) {
      nextCard.querySelector('.card-img-top').style.zIndex = '1';
    }
  });

  return card;
}// fetch data from json
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
// create card
function createCard(cardId, data, index) {
  const card = document.createElement('div');
  card.classList.add('card-sarung');
  // card.style.width = '18rem';
  card.id = cardId;
// create img in the card
  const image = document.createElement('img');
  image.classList.add('card-img-top');
  image.src = `/img/sarung (${cardId.split('-')[1]}).jpeg`;
  image.alt = `Sarung ${cardId.split('-')[1]}`;
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
    const nextCard = document.getElementById(`card-${index + 1}`);
    if (nextCard) {
      nextCard.querySelector('.card-img-top').style.zIndex = '2';
    }
  });
  card.addEventListener('mouseout', () => {
    // Reset z-index of the next card's image
    const nextCard = document.getElementById(`card-${index + 1}`);
    if (nextCard) {
      nextCard.querySelector('.card-img-top').style.zIndex = '1';
    }
  });

  return card;
}