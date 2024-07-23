document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'user') {
        window.location.href = 'login.html';
        return;
    }

    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceDiv = document.getElementById('total-price');

    function displayCartItems() {
        const userCourses = JSON.parse(localStorage.getItem('userCourses')) || {};
        const userCart = userCourses[currentUser.id] || [];
        cartItemsDiv.innerHTML = '';
        
        let totalPrice = 0;
        userCart.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = 'cart-item';
            courseItem.innerHTML = `
                <img src="${course.image}" alt="${course.name}">
                <h3>${course.name}</h3>
                <p>${course.price} INR</p>
                <button onclick="removeFromCart(${course.id})">Remove</button>
            `;
            cartItemsDiv.appendChild(courseItem);
            totalPrice += course.price;
        });
        totalPriceDiv.textContent = `Total Price: ${totalPrice} INR`;
    }

    function removeFromCart(courseId) {
        const userCourses = JSON.parse(localStorage.getItem('userCourses')) || {};
        if (userCourses[currentUser.id]) {
            userCourses[currentUser.id] = userCourses[currentUser.id].filter(course => course.id !== courseId);
            localStorage.setItem('userCourses', JSON.stringify(userCourses));
            displayCartItems();
        }
    }

    document.getElementById('checkoutBtn').addEventListener('click', function() {
        const userCourses = JSON.parse(localStorage.getItem('userCourses')) || {};
        if (userCourses[currentUser.id]) {
            userCourses[currentUser.id] = [];
            localStorage.setItem('userCourses', JSON.stringify(userCourses));
            displayCartItems();
            alert('Checkout successful!');
        }
    });

    document.getElementById('emptyCartBtn').addEventListener('click', function() {
        const userCourses = JSON.parse(localStorage.getItem('userCourses')) || {};
        userCourses[currentUser.id] = [];
        localStorage.setItem('userCourses', JSON.stringify(userCourses));
        displayCartItems();
    });

    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });

    displayCartItems();
});
