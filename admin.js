document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'admin') {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('courseForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('courseTitle').value;
        const image = document.getElementById('courseImage').value;
        const duration = document.getElementById('courseDuration').value;
        const price = document.getElementById('coursePrice').value;
        const seats = document.getElementById('courseSeats').value;
        const topics = document.getElementById('courseTopics').value.split(',');
        const subtopics = document.getElementById('courseSubtopics').value.split(',');

        const courses = JSON.parse(localStorage.getItem('courses')) || [];
        courses.push({ id: courses.length + 1, name: title, image, duration, price, seats, topics, subtopics });
        localStorage.setItem('courses', JSON.stringify(courses));

        alert('Course created successfully!');
        document.getElementById('courseForm').reset();
    });

    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
});
