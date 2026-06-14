const results = document.querySelector('#results');

const params = new URLSearchParams(window.location.search);

const fullName = params.get('fullname');
const email = params.get('email');
const experience = params.get('experience');
const goal = params.get('goal');

results.innerHTML = `
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Experience:</strong> ${experience}</p>
    <p><strong>Goal:</strong> ${goal}</p>
`;