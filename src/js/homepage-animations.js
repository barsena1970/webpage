/* Homepage */
var food = document.querySelector('#food');
var desserts = document.querySelector('#desserts');
var drinks = document.querySelector('#drinks');
var aboutDescription  = document.querySelector('#about-description');
var card2 = document.querySelector('#card-2');
var card3 = document.querySelector('#card-3');
var newsletterForm = document.querySelector('#newsletter-form');
food.style.opacity = "0";
drinks.style.opacity = "0";
aboutDescription.style.opacity = "0";

var options = {
  rootMargin: '0px',
  threshold: 0.2
}

function callback(entries, observer) {
  entries.forEach(function(entry) {
    switch (entry.target.id) {
      case "food":
        if (entry.intersectionRatio > 0) {
          food.style.opacity = "1";
          food.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "drinks":
        if (entry.intersectionRatio > 0) {
          drinks.style.opacity = "1";
          drinks.className += " animated slideInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "about-description":
        if (entry.intersectionRatio > 0) {
          aboutDescription.style.opacity = "1";
          aboutDescription.className += " animated fadeInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
    }
  });
}

// Create an intersection observer
var observer = new IntersectionObserver(callback, options);

// Start observing 
observer.observe(food);
observer.observe(drinks);
observer.observe(aboutDescription);