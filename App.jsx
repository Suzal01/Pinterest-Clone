
document.addEventListener('DOMContentLoaded', () => {
  const grids = document.querySelectorAll('.img');
  const headings = document.querySelectorAll('.heading .changingtext .text');

  if (!grids.length || !headings.length) {
    console.error('No grids or headings found.');
    return;
  }

  function enterScreen(index) {
    const grid = grids[index];
    const heading = headings[index];
    const gridColumns = grid.querySelectorAll('.divs');

    grid.classList.add('active');

    gridColumns.forEach(element => {
      element.classList.remove('appears', 'disappears');
    });

    heading.classList.remove('appears', 'disappears');
  }

  function exitScreen(index, exitDelay) {
    const grid = grids[index];
    const heading = headings[index];
    const gridColumns = grid.querySelectorAll('.divs');

    gridColumns.forEach(element => {
      element.classList.add('disappears');
    });

    heading.classList.add('disappears');

    setTimeout(() => {
      grid.classList.remove('active');
    }, exitDelay);
  }

  function setupAnimationCycle({ timePerScreen, exitDelay }) {
    const cycleTime = timePerScreen + exitDelay;
    let nextIndex = 0;

    function nextCycle() {
      const currentIndex = nextIndex;

      enterScreen(currentIndex);

      setTimeout(() => {
        exitScreen(currentIndex, exitDelay);
      }, timePerScreen);

      nextIndex = (nextIndex + 1) % grids.length;
    }

    nextCycle();
    setInterval(nextCycle, cycleTime);
  }

  setupAnimationCycle({
    timePerScreen: 2000,
    exitDelay: 200 * 7,
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('.dot.active');
  const texts = document.querySelectorAll('.txt');
  const images = document.querySelectorAll('.img');
  const dropdownButton = document.querySelector('.dropdown-button');

  const colors = ['orange', 'lightgrey', 'blue', 'green'];
  const colorClasses = ['orange', 'lightgrey', 'blue', 'green'];

  let currentIndex = 0;
  

  function updateCarousel() {
      dots.forEach(dot => dot.style.backgroundColor = 'grey');
      texts.forEach(text => text.classList.remove('active', ...colorClasses));
      images.forEach(image => image.classList.remove('active'));
      dropdownButton.classList.remove(...colorClasses);

      dots[currentIndex].style.backgroundColor = colors[currentIndex];
      texts[currentIndex].classList.add('active', colors[currentIndex]);
      images[currentIndex].classList.add('active');
      dropdownButton.style.backgroundColor = colors[currentIndex];


      currentIndex = (currentIndex + 1) % dots.length;
  }

  setInterval(updateCarousel, 3500);

  // Initialize the first state
  updateCarousel();
});

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  const scrollButton = document.querySelector('.dropdown-button');
  if (scrollButton) {
      console.log('Scroll button found');

      scrollButton.addEventListener('click', function() {
          const nextSection = document.querySelector('.section--second');
          if (nextSection) {
              console.log('Next section found, scrolling into view');
              nextSection.scrollIntoView({ behavior: 'smooth' });
          } else {
              console.error('Next section not found');
          }
      });
  } else {
      console.error('Scroll button not found');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  const scrollButton = document.querySelector('.scroll-to-top');
  if (scrollButton) {
      console.log('Scroll button found');

      scrollButton.addEventListener('click', function() {
          const nextSection = document.querySelector('.section--first');
          if (nextSection) {
              console.log('Next section found, scrolling into view');
              nextSection.scrollIntoView({ behavior: 'smooth' });
          } else {
              console.error('Next section not found');
          }
      });
  } else {
      console.error('Scroll button not found');
  }
});
