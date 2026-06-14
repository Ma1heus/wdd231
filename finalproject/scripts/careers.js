const careerData = {
    frontend: {
        title: "Front-End Developer",
        salary: "$60,000 - $120,000",
        skills: "HTML, CSS, JavaScript",
        technologies: "React, Vue, Angular",
        description: "Front-end developers build the visual parts of websites and web applications that users interact with."
    },

    backend: {
        title: "Back-End Developer",
        salary: "$70,000 - $130,000",
        skills: "Databases, APIs, Server Logic",
        technologies: "Node.js, Python, Java, SQL",
        description: "Back-end developers create and maintain servers, databases, and application logic."
    },

    fullstack: {
        title: "Full Stack Developer",
        salary: "$80,000 - $140,000",
        skills: "Front-End and Back-End Development",
        technologies: "JavaScript, React, Node.js",
        description: "Full stack developers work on both client-side and server-side parts of applications."
    },

    datascience: {
        title: "Data Scientist",
        salary: "$90,000 - $150,000",
        skills: "Statistics, Data Analysis",
        technologies: "Python, R, SQL",
        description: "Data scientists analyze data and create models to help organizations make decisions."
    },

    game: {
        title: "Game Developer",
        salary: "$65,000 - $130,000",
        skills: "Programming, Game Design",
        technologies: "Unity, Unreal Engine, C#",
        description: "Game developers create video games and interactive experiences."
    },

    mobile: {
        title: "Mobile Developer",
        salary: "$70,000 - $130,000",
        skills: "Mobile App Development",
        technologies: "Swift, Kotlin, Flutter",
        description: "Mobile developers create applications for smartphones and tablets."
    }
};

const modal = document.querySelector('#careerModal');
const modalContent = document.querySelector('#modalContent');
const closeButton = document.querySelector('#closeModal');

const careerButtons = document.querySelectorAll('.career-btn');

careerButtons.forEach(button => {

    button.addEventListener('click', () => {

        const careerKey = button.dataset.career;

        const career = careerData[careerKey];

        modalContent.innerHTML = `
            <h2>${career.title}</h2>

            <p>
                <strong>Salary:</strong>
                ${career.salary}
            </p>

            <p>
                <strong>Skills:</strong>
                ${career.skills}
            </p>

            <p>
                <strong>Technologies:</strong>
                ${career.technologies}
            </p>

            <p>
                <strong>Description:</strong>
                ${career.description}
            </p>
        `;

        modal.showModal();
    });

});

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {

    const dialogDimensions = modal.getBoundingClientRect();

    const clickedOutside =
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom;

    if (clickedOutside) {
        modal.close();
    }

});