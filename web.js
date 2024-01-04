// JavaScript to add a class when scrolling to make the header sticky
window.addEventListener('scroll', function() {
  const header = document.querySelector('.sticky-header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) { // Change this value as needed to trigger the sticky header
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});