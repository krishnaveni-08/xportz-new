// $(document).ready(function(){
//     let carousel=$("#crousel .container");
//     let currentIndex=0;
//     let carouselLength= carousel.length;
//     carousel.first().addClass("active");
//     function shownItem(currInd){
//         carousel.removeClass("active");
//         carousel.eq(currInd).addClass("active");
//     }
//     function autoplay(){
//         currentIndex=(currentIndex+1)%carouselLength;
//         shownItem(currentIndex)
//     }
//     setInterval(autoplay,5000);
// });




  document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector("#crousel");
    const containers = section.querySelectorAll(".container");
    let currentIndex = 0;

    containers.forEach((el, index) => {
      if (index !== 0) el.style.display = "none";
    });

    function showSlide(index) {
      containers.forEach((el, i) => {
        el.style.display = i === index ? "block" : "none";
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % containers.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + containers.length) % containers.length;
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 4000);

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    });
    
  });




    const input = document.getElementById("searchBox");

    const placeholderTexts = [
        "Search for bats...",
        "Search for gloves...",
        "Search for helmets...",
        "Search for football shoes...",
        "Search for cricket kits..."
    ];

    let index = 0;

    function rotatePlaceholder() {
        input.placeholder = placeholderTexts[index];
        index = (index + 1) % placeholderTexts.length;
    }

    setInterval(rotatePlaceholder, 2000); 
