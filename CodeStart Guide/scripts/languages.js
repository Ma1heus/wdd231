const container = document.querySelector('#languages-container');

const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

async function getLanguages() {
    try {

        const response = await fetch('data/languages.json');

        if (!response.ok) {
            throw new Error('Unable to fetch language data.');
        }

        const languages = await response.json();

        displayLanguages(languages);

    } catch (error) {
        console.error(error);

        container.innerHTML = `
            <p>
                Sorry, there was a problem loading the languages.
            </p>
        `;
    }
}

function displayLanguages(languages) {

    container.innerHTML = '';

    languages.forEach(language => {

        const isFavorite = favorites.includes(language.id);

        const card = document.createElement('article');

        card.classList.add('language-card');

        card.innerHTML = `
            <h3>${language.name}</h3>

            <p>
                <strong>Difficulty:</strong>
                ${language.difficulty}
            </p>

            <p>
                <strong>Career:</strong>
                ${language.career}
            </p>

            <p>
                <strong>Description:</strong>
                ${language.description}
            </p>

            <button
                class="favorite-btn"
                data-id="${language.id}">
                ${isFavorite ? '★ Favorited' : '☆ Favorite'}
            </button>
        `;

        container.appendChild(card);
    });

    addFavoriteEvents();
}

function addFavoriteEvents() {

    const buttons = document.querySelectorAll('.favorite-btn');

    buttons.forEach(button => {

        button.addEventListener('click', () => {

            const id = Number(button.dataset.id);

            let storedFavorites =
                JSON.parse(localStorage.getItem('favorites')) || [];

            if (storedFavorites.includes(id)) {

                storedFavorites =
                    storedFavorites.filter(favoriteId => favoriteId !== id);

            } else {

                storedFavorites.push(id);
            }

            localStorage.setItem(
                'favorites',
                JSON.stringify(storedFavorites)
            );

            location.reload();
        });
    });
}

getLanguages();