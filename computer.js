const menuE1 = document.querySelector( '.menu');
window.addEventListener('scroll', () => { if (window.scrollY >50) { menuE1.classList.add('menu-scrolled');}
else if(window. scrollY <= 50) { menuE1.classList.remove('menu-scrolled');}});


//  slider section



// another slider Selection


// const slider = document.querySelector('.slider');
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

// next.addEventListener('click', () => {
//   slider.scrollLeft += 130; // right slide
// });

// prev.addEventListener('click', () => {
//   slider.scrollLeft -= 130; // left slide
// });





// const track = document.getElementById('track');
// const moveGap = 2000; // time between slides
// let timer;

// function cardWidthWithGap() {
//   const first = track.querySelector('a');
//   const style = getComputedStyle(track);
//   const gap = parseInt(style.gap) || 0;
//   return first.offsetWidth + gap;
// }

// function slideOnce() {
//   const moveX = cardWidthWithGap();
//   track.style.transform = `translateX(-${moveX}px)`;

//   track.addEventListener('transitionend', function handler() {
//     track.appendChild(track.firstElementChild);
//     track.style.transition = 'none';
//     track.style.transform = 'translateX(0)';
//     void track.offsetWidth; // reflow
//     track.style.transition = `transform var(--speed) ease`;
//     track.removeEventListener('transitionend', handler);
//   });
// }

// function start() {
//   timer = setInterval(slideOnce, moveGap);
// }

// function stop() {
//   clearInterval(timer);
// }

// document.getElementById('offerContainer').addEventListener('mouseenter', stop);
// document.getElementById('offerContainer').addEventListener('mouseleave', start);

// start();


  
//   const slideWidth = 170; // width + margin approx
//   let autoSlide;

//   next.addEventListener('click', () => {
//     slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
//   });

//   prev.addEventListener('click', () => {
//     slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
//   });

//   // ✅ Autoplay Function
//   function autoPlay() {
//     slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
//     if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
//       slider.scrollTo({ left: 0, behavior: 'smooth' });
//     }
//   }

//   function startAutoPlay() {
//     autoSlide = setInterval(autoPlay, 3000); // 3 second
//   }

//   function stopAutoPlay() {
//     clearInterval(autoSlide);
//   }

//   // Start autoplay
//   startAutoPlay();

//   // ✅ Hover Pause
//   slider.addEventListener('mouseenter', stopAutoPlay);
//   slider.addEventListener('mouseleave', startAutoPlay);








const slider = document.querySelector('.slider');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    next.addEventListener('click', () => {
      slider.scrollLeft += 130; // scroll one box
    });

    prev.addEventListener('click', () => {
      slider.scrollLeft -= 130;
});