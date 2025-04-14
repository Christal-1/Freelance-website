// FORM VALIDATION

document.querySelector('form').addEventListener('submit',
    function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // CHECK IF FIELDS ARE EMPTY
        if (name === '' || email === '' || message === '') {
            alert('All fields are required!');
            event.preventDefault();
            return;
        }

        // CHECK IF EMAIL IS CORRECT
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address!');
            event.preventDefault();
            return;
        }
        alert('Form submitted successfully!');
    });
