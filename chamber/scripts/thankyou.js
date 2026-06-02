const params = new URLSearchParams(window.location.search);

document.querySelector('#firstName').textContent =
    params.get('firstName') || 'N/A';

document.querySelector('#lastName').textContent =
    params.get('lastName') || 'N/A';

document.querySelector('#organizationTitle').textContent =
    params.get('organizationTitle') || 'N/A';

document.querySelector('#email').textContent =
    params.get('email') || 'N/A';

document.querySelector('#phone').textContent =
    params.get('phone') || 'N/A';

document.querySelector('#organization').textContent =
    params.get('organization') || 'N/A';

const membershipLevels = {
    np: 'NP Membership',
    bronze: 'Bronze Membership',
    silver: 'Silver Membership',
    gold: 'Gold Membership'
};

document.querySelector('#membership').textContent =
    membershipLevels[params.get('membership')] || 'N/A';

const timestamp = params.get('timestamp');

document.querySelector('#timestamp').textContent =
    timestamp
        ? new Date(timestamp).toLocaleString()
        : 'N/A';