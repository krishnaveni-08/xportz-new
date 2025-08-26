// const imgContainer = document.querySelector('.img-container');
//     const leftArrow = document.querySelector('.left-arrow');
//     const rightArrow = document.querySelector('.right-arrow');

//     rightArrow.addEventListener('click', () => {
//         imgContainer.scrollBy({ left: 300, behavior: 'smooth' });
//     });

//     leftArrow.addEventListener('click', () => {
//         imgContainer.scrollBy({ left: -300, behavior: 'smooth' });
//     });





// document.addEventListener("DOMContentLoaded", function () {
//   const sections = document.querySelectorAll("section");
//   let isScrolling = false;

//   const options = {
//     threshold: 0.5
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const section = entry.target;
//         section.classList.add("visible");
//       }
//     });
//   }, options);

//   sections.forEach((section) => {
//     observer.observe(section);
//   });

//   const review = document.querySelector("#review");
//   review.addEventListener("mouseenter", () => {
//     review.classList.add("animate-review");
//   });

//   review.addEventListener("mouseleave", () => {
//     review.classList.remove("animate-review");
//   });
// });

// const style = document.createElement('style');
// style.innerHTML = `
//   section {
//     opacity: 0;
//     transform: translateY(50px);
//     transition: all 1s ease-out;
//   }

//   section.visible {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   #review.animate-review {
//     transition: all 1.5s ease-out;
//     transform: translateY(0) scale(1.02);
//     opacity: 1;
//   }
// `;
// let openIndex = -1;

// function toggleReview(index) {
//   const prev = document.getElementById(`review-${openIndex}`);
//   const current = document.getElementById(`review-${index}`);

//   if (openIndex === index) {
//     current.style.display = "none";
//     openIndex = -1;
//   } else {
//     if (prev) prev.style.display = "none";
//     current.style.display = "block";
//     openIndex = index;
//   }
// }


// function toggleReview(index) {
//   const body = document.getElementById(`body-${index}`);
//   const icon = document.getElementById(`icon-${index}`);

//   if (body.style.display === "block") {
//     body.style.display = "none";
//     icon.textContent = "+";
//   } else {
//     body.style.display = "block";
//     icon.textContent = "−";
//   }
// }

  function toggleReview(index) {
    const body = document.getElementById(`body-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (body.style.display === "block") {
      body.style.display = "none";
      icon.textContent = "+";
    } else {
      // Close all other accordions
      document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
      document.querySelectorAll('.icon').forEach(i => i.textContent = '+');

      // Open selected one
      body.style.display = "block";
      icon.textContent = "-";
    }
  }



