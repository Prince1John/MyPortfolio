document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('php-email-form'); // Replace with your form ID

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission

      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      // Validate inputs
      if (!name) {
          alert('Error: Name is required!');
          return;
      }

      if (!email) {
          alert('Error: Email is required!');
          return;
      }

      if (!validateEmail(email)) {
          alert('Error: Invalid email format!');
          return;
      }

      if (!subject) {
          alert('Error: Subject is required!');
          return;
      }

      if (!message) {
          alert('Error: Message is required!');
          return;
      }

      // If validation passes, submit the form
      form.submit();
  });

  // Email format validation function
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }
});
