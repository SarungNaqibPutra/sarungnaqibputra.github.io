// fetch data from json
fetch('/script/card-data-wm.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('women-card');

    for (let i = 1; i <= 22; i++) {
      const cardId = `card-${i}`;
      const card = createCard1(cardId, data);
      cardContainer.appendChild(card);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
// create card
function createCard1(cardId, data) {
  const card = document.createElement('div');
  card.classList.add('card-sarung');
  // card.style.width = '18rem';
  card.id = cardId;
// create img in the card
  const image1 = document.createElement('img');
  image1.classList.add('card-img-top');
  image1.loading = `lazy`
  image1.src = `/img/wm/sarung wm (${cardId.split('-')[1]}).jpeg`;
  image1.alt = `Sarung wm ${cardId.split('-')[1]}`;
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

  card.appendChild(image1);
  cardBody.appendChild(cardPriced);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);

  return card;
}