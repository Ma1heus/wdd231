const url = 'data/members.json';

const cards = document.querySelector('#members');

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data.members);
}

getMembers();

const displayMembers = (members) => {

    members.forEach((member) => {

        let card = document.createElement('section');

        let logo = document.createElement('img');

        let name = document.createElement('h2');

        let address = document.createElement('p');

        let phone = document.createElement('p');

        let website = document.createElement('a');

        name.textContent = member.name;

        address.textContent = member.address;

        phone.textContent = member.phone;

        website.textContent = 'Visit Website';

        website.setAttribute('href', member.website);

        website.setAttribute('target', '_blank');

        logo.setAttribute('src', `images/${member.image}`);

        logo.setAttribute('alt', `${member.name} logo`);

        logo.setAttribute('loading', 'lazy');

        card.appendChild(logo);

        card.appendChild(name);

        card.appendChild(address);

        card.appendChild(phone);

        card.appendChild(website);

        cards.appendChild(card);

    });

}