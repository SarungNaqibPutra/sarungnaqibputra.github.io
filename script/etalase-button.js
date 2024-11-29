const menButton = document.getElementById('men');
const womenButton = document.getElementById('women');

menButton.addEventListener('click', () => {
    menButton.classList.add('selected');
    womenButton.classList.remove('selected');
});

womenButton.addEventListener('click', () => {
    womenButton.classList.add('selected');
    menButton.classList.remove('selected');
});