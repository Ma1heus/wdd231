const menuButton = document.querySelector('#menu-btn');
const navigation = document.querySelector('#navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');

    if (navigation.classList.contains('open')) {
        menuButton.innerHTML = '&times;';
    } else {
        menuButton.innerHTML = '&#9776;';
    }
});

// Footer year
const currentYear = document.querySelector('#currentyear');

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}