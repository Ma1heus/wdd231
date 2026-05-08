const allBtn = document.querySelector("#all-btn");
const cseBtn = document.querySelector("#cse-btn");
const wddBtn = document.querySelector("#wdd-btn");

const courses = document.querySelectorAll(".course");
const total = document.querySelector("#total");

function filterCourses(category) {

    let totalCredits = 0;

    courses.forEach(course => {

        if (category === "all") {

            course.style.display = "block";

            totalCredits += Number(course.dataset.credits);
        }

        else if (course.classList.contains(category)) {

            course.style.display = "block";

            totalCredits += Number(course.dataset.credits);
        }

        else {
            course.style.display = "none";
        }
    });

    total.textContent =
        `The total credits for courses listed above is ${totalCredits}`;
}

allBtn.addEventListener("click", () => {
    filterCourses("all");
});

cseBtn.addEventListener("click", () => {
    filterCourses("cse");
});

wddBtn.addEventListener("click", () => {
    filterCourses("wdd");
});

filterCourses("all");