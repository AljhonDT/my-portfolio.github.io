// For Training
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;
  
    const showItem = (index) => {
      items.forEach((item, idx) => {
        item.classList.toggle('active', idx === index);
      });
    };
  
    const showNextItem = () => {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    };
  
    const showPrevItem = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    };
  
    prevButton.addEventListener('click', showPrevItem);
    nextButton.addEventListener('click', showNextItem);
  
    showItem(currentIndex);
  });


 

// For about 
const texts = ["a Web Developer", "a Data Analytics Engineer", "a Software Engineer", "a Mobile App Developer"];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typingElement = document.getElementById('typing-text');

function type() {
  if (charIndex < texts[index].length && !isDeleting) {
    currentText += texts[index].charAt(charIndex);
    charIndex++;
    typingElement.innerHTML = currentText; // Use innerHTML to support &nbsp;
    setTimeout(type, 150);
  } else if (isDeleting) {
    currentText = currentText.substring(0, currentText.length - 1);
    typingElement.innerHTML = currentText || '&nbsp;'; // Add a non-breaking space when text is fully deleted
    setTimeout(type, 100);
    if (currentText === '') {
      isDeleting = false;
      charIndex = 0;
      index = (index + 1) % texts.length;
    }
  } else {
    isDeleting = true;
    setTimeout(type, 1000); // Pause before deleting
  }
}

document.addEventListener('DOMContentLoaded', () => {
  type();
});






// For contact Us

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission (AJAX request can be added here)
    setTimeout(function() {
      document.getElementById('form-response').innerText = 'Thank you for contacting me, ' + name + '! I will get back to you soon.';
      document.getElementById('form-response').style.display = 'block';
      
      // Clear form
      document.getElementById('contact-form').reset();
    }, 1000); // Simulate delay
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000); // Start typing effect after page load
  });

// JavaScript for Sidebar
// Toggle the sidebar when the hamburger menu is clicked
document.getElementById('hamburger-menu').addEventListener('click', function () {
  document.getElementById('sidebar-menu').classList.toggle('open');
});

// Close the sidebar when the close button is clicked
document.getElementById('close-btn').addEventListener('click', function () {
  document.getElementById('sidebar-menu').classList.remove('open');
});

// Close the sidebar automatically when a link is selected
document.querySelectorAll('.sidebar a').forEach(function (link) {
  link.addEventListener('click', function () {
      document.getElementById('sidebar-menu').classList.remove('open');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // Select all sections
  const navLinks = document.querySelectorAll(".navbar .menu a");

  function changeActiveLink() {
      let index = sections.length;
      const scrollPosition = window.scrollY + (window.innerHeight / 2); // Center of the viewport

      while (index-- && scrollPosition < sections[index].offsetTop) {}

      navLinks.forEach((link) => link.classList.remove("active"));
      if (navLinks[index]) {
          navLinks[index].classList.add("active");
      }
  }

  changeActiveLink(); // Change active link on page load
  window.addEventListener("scroll", changeActiveLink); // Change active link on scroll

  // Add click event listeners to the nav links
  navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop,
                  behavior: "smooth"
              });

              // Close the sidebar if it's open
              if (document.getElementById('sidebar-menu').classList.contains('open')) {
                  document.getElementById('sidebar-menu').classList.remove('open');
              }
          }
      });
  });

  // Add click event listeners to the sidebar links
  document.querySelectorAll(".sidebar a").forEach((link) => {
      link.addEventListener("click", function (event) {
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop,
                  behavior: "smooth"
              });

              // Close the sidebar after clicking a link
              document.getElementById('sidebar-menu').classList.remove('open');
          }
      });
  });
});


 

  // CV button
  document.addEventListener("DOMContentLoaded", function () {
    const requestCvButton = document.querySelector(".request-cv-button");
    const contactSection = document.getElementById("contact-us");
    const contactForm = document.getElementById("contact-form");
    const messageField = document.getElementById("message");

    if (requestCvButton) {
        requestCvButton.addEventListener("click", function () {
            // Prefill the message field
            if (messageField) {
                messageField.value = "Hello, I would like to request a copy of your CV. Thank you!";
            }
            // Scroll smoothly to the contact section
            contactSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});

  

