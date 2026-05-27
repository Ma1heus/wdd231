const spotlightContainer =
    document.querySelector('.spotlight-container');

const membersURL = 'data/members.json';


async function getSpotlights() {

    try {

        const response = await fetch(membersURL);

        if (response.ok) {

            const data = await response.json();

            displaySpotlights(data.members);

        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.log(error);

    }
}


function displaySpotlights(members) {

    spotlightContainer.innerHTML = "";

    // only silver and gold
    const qualifiedMembers = members.filter(member =>
        member.membership === 2 ||
        member.membership === 3
    );

    // randomize
    const shuffled =
        qualifiedMembers.sort(() => 0.5 - Math.random());

    // choose 3
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {

        const card = document.createElement('div');

        card.classList.add('spotlight-card');

        const membershipLevel =
            member.membership === 3
                ? 'Gold Member'
                : 'Silver Member';

        card.innerHTML = `
            <img
                src="images/${member.image}"
                alt="${member.name} logo"
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