/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Get the Scroll to top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
// Get the root element of the document
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  if (rootElement.scrollTop / scrollTotal > 0.7) {
    // show button
    scrollToTopBtn.style.display = "flex";
  } else {
    // Hide button
    scrollToTopBtn.style.display = "none";
  }
}

// Create a function called scrollToTop
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// add a click event listener to the scroll to top button
scrollToTopBtn.addEventListener("click", scrollToTop);

document.addEventListener("scroll", handleScroll);
