const url = 'data/members.json';

const cards = document.querySelector('#members');

const gridButton = document.querySelector('#grid');

const listButton = document.querySelector('#list');

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data.members);
}

getMembers();

const displayMembers = (members) => {

    members.forEach((member) => {

        const card = document.createElement('section');

        card.classList.add('card');

        const image = document.createElement('img');

        image.setAttribute(
            'src',
            `images/${member.image}`
        );

        image.setAttribute(
            'alt',
            `${member.name} image`
        );

        image.setAttribute(
            'loading',
            'lazy'
        );

        const content = document.createElement('div');

        content.classList.add('card-content');

        const name = document.createElement('h2');

        name.textContent = member.name;

        const description = document.createElement('p');

        description.textContent =
            member.description;

        const address = document.createElement('p');

        address.textContent =
            member.address;

        const phone = document.createElement('p');

        phone.textContent =
            member.phone;

        const website = document.createElement('a');

        website.textContent = 'Visit Website';

        website.href = member.website;

        website.target = '_blank';

        const membership =
            document.createElement('span');

        membership.classList.add('membership');

        if (member.membership === 3) {

            membership.textContent = 'Gold Member';

            membership.classList.add('gold');

        } else if (member.membership === 2) {

            membership.textContent = 'Silver Member';

            membership.classList.add('silver');

        } else {

            membership.textContent = 'Member';

            membership.classList.add('member');
        }

        content.appendChild(name);

        content.appendChild(description);

        content.appendChild(address);

        content.appendChild(phone);

        content.appendChild(membership);

        content.appendChild(website);

        card.appendChild(image);

        card.appendChild(content);

        cards.appendChild(card);
    });

}

gridButton.addEventListener('click', () => {

    cards.classList.remove('list');

});

listButton.addEventListener('click', () => {

    cards.classList.add('list');

});