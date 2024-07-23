document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'user') {
        window.location.href = 'signup.html';
        return;
    }

    function displayCourses(courses) {
        const coursesList = document.getElementById('coursesList');
        coursesList.innerHTML = '';
        courses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = 'course-item';
            courseItem.innerHTML = `
                <img src="${course.image}" alt="${course.name}">
                <h3>${course.name}</h3>
                <p>${course.duration}</p>
                <p>${course.price} INR</p>
                <button onclick="purchaseCourse(${course.id})">Purchase</button>
            `;
            coursesList.appendChild(courseItem);
        });
    }

    function searchCourses(query) {
        const courses = JSON.parse(localStorage.getItem('courses')) || [];
        const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(query.toLowerCase()));
        displayCourses(filteredCourses);
    }

    document.getElementById('searchInput').addEventListener('input', function(event) {
        searchCourses(event.target.value);
    });

    displayCourses(JSON.parse(localStorage.getItem('courses')) || []);

    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
});

function purchaseCourse(courseId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    const course = courses.find(course => course.id === courseId);
    if (course && course.seats > 0) {
        course.seats -= 1;
        localStorage.setItem('courses', JSON.stringify(courses));

        const userCourses = JSON.parse(localStorage.getItem('userCourses')) || {};
        if (!userCourses[currentUser.id]) {
            userCourses[currentUser.id] = [];
        }
        userCourses[currentUser.id].push(course);
        localStorage.setItem('userCourses', JSON.stringify(userCourses));

        alert('Course purchased successfully!');
    } else {
        alert('Course is full!');
    }
}
