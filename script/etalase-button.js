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
document.addEventListener('DOMContentLoaded', () => {
    const menButton = document.getElementById('men');
    const womenButton = document.getElementById('women');
    const cardContainer = document.getElementById('men-card');
    const cardContainerWM = document.getElementById('women-card');
    // Event listener for Men button
    menButton.addEventListener('click', () => {
        cardContainer.style.display = 'grid'; // Show Men cards as grid
        cardContainerWM.style.display = 'none'; // Hide Women cards
        cardContainer.classList.remove('hidden');
        cardContainerWM.classList.add('hidden');
    });

    // Event listener for Women button
    womenButton.addEventListener('click', () => {
        cardContainer.style.display = 'none'; // Hide Men cards
        cardContainerWM.style.display = 'grid'; // Show Women cards as grid
        cardContainer.classList.add('hidden');
        cardContainerWM.classList.remove('hidden');
    });

    // Optionally, trigger the click event for the Men button by default
    menButton.click();
});