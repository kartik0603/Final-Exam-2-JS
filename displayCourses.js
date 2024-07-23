document.addEventListener('DOMContentLoaded', function() {
    const courseContainer = document.getElementById('course-container');

    const courses = JSON.parse(localStorage.getItem('courses'));

    if (courses) {
        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';

            courseCard.innerHTML = `
                <img src="${course.image}" alt="${course.name}">
                <h3>${course.name}</h3>
                <p>Duration: ${course.duration}</p>
                <p>Price: ₹${course.price}</p>
                <button onclick="enroll(${course.id})">Enroll</button>
            `;

            courseContainer.appendChild(courseCard);
        });
    }
});

function enroll(courseId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const courses = JSON.parse(localStorage.getItem('courses'));
    const course = courses.find(c => c.id === courseId);

    if (course) {
        const cartItem = cart.find(item => item.id === courseId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...course, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Enrolled in course: ${course.name}`);
    }
}
