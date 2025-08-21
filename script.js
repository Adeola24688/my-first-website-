// Change heading when clicked
const mainHeading = document.querySelector('h1');
mainHeading.addEventListener('click', () => {
    mainHeading.textContent = 'You clicked me! ✅';
});

// Add date to page
const dateParagraph = document.createElement('p');
dateParagraph.textContent = `Today is: ${new Date().toLocaleDateString()}`;
dateParagraph.style.marginTop = '20px';
dateParagraph.style.fontStyle = 'italic';
document.body.appendChild(dateParagraph);

const catButton = document.getElementById('new-cat-btn');
const catImage = document.querySelector('img');

catButton.addEventListener('click', () => {
    // Random kitten images from placekitten.com
    const newId = Math.floor(Math.random() * 1000);
    catImage.src = `https://placekitten.com/300/200?image=${newId}`;
});