document.querySelector('#timestamp').value =
    new Date().toISOString();

const buttons =
    document.querySelectorAll('.modal-btn');

buttons.forEach(button => {

    button.addEventListener('click', () => {

        const modalId =
            button.dataset.modal;

        const modal =
            document.querySelector(`#${modalId}`);

        modal.showModal();

    });

});

const closeButtons =
    document.querySelectorAll('.close-btn');

closeButtons.forEach(button => {

    button.addEventListener('click', () => {

        button.closest('dialog').close();

    });

});