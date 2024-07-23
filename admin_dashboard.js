document.addEventListener('DOMContentLoaded', function() {
    const courseList = document.getElementById('course-list');
    const courses = JSON.parse(localStorage.getItem('courses')) || [];

    // Display existing courses
    displayCourses();

    // Display courses
    function displayCourses() {
        courseList.innerHTML = '';
        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';

            courseCard.innerHTML = `
                <img src="${course.image}" alt="${course.name}">
                <h3>${course.name}</h3>
                <p>Duration: ${course.duration}</p>
                <p>Price: ₹${course.price}</p>
                <p>Seats Available: ${course.seats}</p>
                <button onclick="addSeats(${course.id})">Add Seat</button>
                <button onclick="removeSeats(${course.id})">Remove Seat</button>
                <button onclick="removeCourse(${course.id})">Remove Course</button>
            `;

            courseList.appendChild(courseCard);
        });
    }

    // Add seats
    window.addSeats = function(courseId) {
        const course = courses.find(course => course.id === courseId);
        if (course) {
            course.seats += 1;
            localStorage.setItem('courses', JSON.stringify(courses));
            displayCourses();
        }
    };

    // Remove seats
    window.removeSeats = function(courseId) {
        const course = courses.find(course => course.id === courseId);
        if (course && course.seats > 0) {
            course.seats -= 1;
            localStorage.setItem('courses', JSON.stringify(courses));
            displayCourses();
        }
    };

    // Remove course
    window.removeCourse = function(courseId) {
        const index = courses.findIndex(course => course.id === courseId);
        if (index > -1) {
            courses.splice(index, 1);
            localStorage.setItem('courses', JSON.stringify(courses));
            displayCourses();
        }
    };
});
