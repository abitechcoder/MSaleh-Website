// Get all inputs in Contact Us Form
const contact_name = document.getElementById("name");
const contact_email = document.getElementById("email");
const contact_message = document.getElementById("message");
const contact_form = document.getElementById("contactForm");
const contact_alert = document.getElementById("contact_alert");

// Get the modal
var modal = document.getElementById("myModal");

// Get all small images and insert it inside the modal - use its "alt" text as a caption
var smallImages = document.querySelectorAll(".smallImage");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

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

smallImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  })
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const res = await fetch(
//     "https://formsubmit.co/ajax/abiolaolalekan39@gmail.com",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         name: contact_name.value,
//         email: contact_email.value,
//         message: contact_message.value,
//       }),
//     }
//   )
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       if (data.success == "true") {
//         contact_name.value = "";
//         contact_email.value = "";
//         contact_message.value = "";
//       }
//     })
//     .catch((error) => console.log(error));
// };

// add an event listener to the form submit btn
// contact_form.addEventListener("submit", handleSubmit);

function isFormLoaded() {
  contact_name.value = "";
  contact_email.value = "";
  contact_message.value = "";
}
