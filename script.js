const sidebar  = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    console.log('name:', name);
    console.log('email', email);
    console.log('phone', phone);
    console.log('message', message);

    alert('Thank you for message me!');

    // Reset the form
    document.getElementById('contact-form').reset();
});



document.getElementById('rate-me-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedback').value;

    console.log('Rating:', rating);
    console.log('Feedback:', feedback);

    alert('Thank you for your feedback!');

    // Reset the form
    document.getElementById('rate-me-form').reset();
});

