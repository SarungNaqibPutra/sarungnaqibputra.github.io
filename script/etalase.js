// fetch data from json
fetch('/script/card-data.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('men-card');

    for (let i = 1; i <= 28; i++) {
      const cardId = `card-${i}`;
      const card = createCard(cardId, data);
      cardContainer.appendChild(card);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
// create card
function createCard(cardId, data) {
  const card = document.createElement('div');
  card.classList.add('card-sarung');
  // card.style.width = '18rem';
  card.id = cardId;
// create img in the card
  const image = document.createElement('img');
  image.classList.add('card-img-top');
  image.loading = 'lazy';
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

  return card;
}