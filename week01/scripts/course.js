const courses = document.querySelectorAll(".course");
const total = document.querySelector("#total");

let totalCredits = 0;

courses.forEach(course => {

    totalCredits += Number(course.dataset.credits);

});

total.textContent =
    `The total credits for course listed above is ${totalCredits}`;