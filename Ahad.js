function getThem() {
    alert("Redirecting to download page...");
  }
  
  function seeFeatures() {
    alert("Scrolling to features section...");
  }
  
  /* Price plan */
  // script.js (optional for hover, click effects etc.)
document.querySelectorAll('.card button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for choosing a plan!');
  });
});

 /* Love Frame*/
  
// No dynamic features yet
console.log("Testimonials section loaded");

/* last section */
function submitForm() {
  const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
  const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
  const phone = document.querySelector('input[placeholder="Your Phone"]').value.trim();
  const message = document.querySelector('textarea').value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{7,15}$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }

  alert("Message Sent Successfully!");
}




