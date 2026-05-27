const spotlightContainer =
    document.querySelector('.spotlight-container');

const membersURL =
    'data/members.json';


async function getSpotlights() {

    try {

        const response =
            await fetch(membersURL);

        if (response.ok) {

            const data =
                await response.json();

            displaySpotlights(data.members);

        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.log(error);

    }
}


function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [array[i], array[j]] =
            [array[j], array[i]];
    }

    return array;
}


function displaySpotlights(members) {

    spotlightContainer.innerHTML = "";

    // Gold and Silver only
    const qualifiedMembers =
        members.filter(member =>
            member.membership === 2 ||
            member.membership === 3
        );

    // Randomize members
    const shuffledMembers =
        shuffleArray(qualifiedMembers);

    // Select 3 members
    const selectedMembers =
        shuffledMembers.slice(0, 3);

    selectedMembers.forEach(member => {

        const card =
            document.createElement('div');

        card.classList.add('spotlight-card');

        const membershipLevel =
            member.membership === 3
                ? 'Gold Member'
                : 'Silver Member';

        card.innerHTML = `
            <img
                src="images/${member.image}"
                alt="${member.name} logo"
                loading="lazy"
            >

            <h3>${member.name}</h3>

            <p>${member.description}</p>

            <p>
                <strong>Phone:</strong>
                ${member.phone}
            </p>

            <p>
                <strong>Address:</strong>
                ${member.address}
            </p>

            <a
                href="${member.website}"
                target="_blank"
                rel="noopener"
            >
                Visit Website
            </a>

            <p class="membership-level">
                ${membershipLevel}
            </p>
        `;

        spotlightContainer.appendChild(card);

    });
}


getSpotlights();