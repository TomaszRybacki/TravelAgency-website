// Menu

const hamburgerElem = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger');
const menuElem =  document.querySelector('.menu__navigation');

let visibility = false;

hamburgerElem.addEventListener('click', function() {
  hamburgerIcon.classList.toggle('is-active');

  if (visibility) {
    menuElem.style.display = 'none';
    menuElem.classList.toggle('scale-it');
    visibility = false;
  } else {
    menuElem.style.display = 'flex';
    menuElem.classList.toggle('scale-it');
    visibility = true;
  }
});

// Smooth scrolling
const screenSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log(screenSize);

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('touchstart click', function (event) {
    if (screenSize <= 420) {
        hamburgerIcon.classList.toggle('is-active');
        menuElem.style.display = 'none';
        menuElem.classList.toggle('scale-it');
        visibility = false;
      }

    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
