document.addEventListener('DOMContentLoaded', function() {
    const addCourseForm = document.getElementById('add-course-form');
    const courseList = document.getElementById('course-list');

    const courses = JSON.parse(localStorage.getItem('courses')) || [];

    // Display existing courses
    displayCourses();

    // Add new course
    addCourseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newCourse = {
            id: Date.now(),
            name: event.target.name.value,
            image: event.target.image.value,
            duration: event.target.duration.value,
            price: parseFloat(event.target.price.value),
            seats: parseInt(event.target.seats.value),
            topics: event.target.topics.value.split(',').map(topic => topic.trim()),
            subtopics: event.target.subtopics.value.split(',').map(subtopic => subtopic.trim())
        };

        courses.push(newCourse);
        localStorage.setItem('courses', JSON.stringify(courses));
        displayCourses();
        addCourseForm.reset();
    });

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
                <button onclick="purchaseCourse(${course.id})">Purchase</button>
                <button onclick="removeCourse(${course.id})">Remove</button>
            `;

            courseList.appendChild(courseCard);
        });
    }

    // Remove course
    window.removeCourse = function(courseId) {
        const index = courses.findIndex(course => course.id === courseId);
        if (index > -1) {
            courses.splice(index, 1);
            localStorage.setItem('courses', JSON.stringify(courses));
            displayCourses();
        }
    };

    // Purchase course
    window.purchaseCourse = function(courseId) {
        const index = courses.findIndex(course => course.id === courseId);
        if (index > -1) {
            if (courses[index].seats > 0) {
                courses[index].seats -= 1;
                localStorage.setItem('courses', JSON.stringify(courses));
                displayCourses();
            } else {
                alert("No seats available for this course.");
            }
        }
    };
});
