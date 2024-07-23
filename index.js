document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'user') {
        window.location.href = 'signup.html';
        return;
    }

    const courseList = document.getElementById('course-list');
    const searchInput = document.getElementById('searchInput');
    const logoutBtn = document.getElementById('logoutBtn');

    let courses = JSON.parse(localStorage.getItem('courses')) || [];

    // Display courses
    function displayCourses(filteredCourses = courses) {
        courseList.innerHTML = '';
        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';

            courseCard.innerHTML = `
                <img src="${course.image}" alt="${course.name}">
                <h3>${course.name}</h3>
                <p>Duration: ${course.duration}</p>
                <p>Price: ₹${course.price}</p>
                <p>Seats: ${course.seats}</p>
                <button onclick="purchaseCourse(${course.id})" ${course.seats <= 0 ? 'disabled' : ''}>Purchase</button>
            `;

            courseList.appendChild(courseCard);
        });
    }

    // Search courses
    function searchCourses(query) {
        const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(query.toLowerCase()));
        displayCourses(filteredCourses);
    }

    // Event listeners
    searchInput.addEventListener('input', function(event) {
        searchCourses(event.target.value);
    });

    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });

    // Initial display
    displayCourses();

    // Purchase course
    window.purchaseCourse = function(courseId) {
        const course = courses.find(course => course.id === courseId);
        if (course && course.seats > 0) {
            course.seats -= 1;
            localStorage.setItem('courses', JSON.stringify(courses));
            displayCourses(); // Update the display after purchase
        }
    };
});