document.addEventListener("DOMContentLoaded", function () {
  /* ----------------------------------
     Mobile Navigation Toggle
  ---------------------------------- */
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");
  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
    
    // Add click listeners on each nav link to close the menu when clicked (mobile view)
    const navLinks = document.querySelectorAll("#nav-menu li a");
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        // Only collapse the nav menu if in mobile view (optional check)
        if (window.innerWidth <= 768) {
          navMenu.classList.remove("active");
        }
      });
    });
  }

  /* ----------------------------------
         BIO SLIDER (Section 1)
  ---------------------------------- */
  const bioSlides = document.querySelectorAll(".bio-slide");
  const bioDotsContainer = document.getElementById("bio-dots");
  let currentBioSlide = 0;

  // Create dot navigation for the Bio slider
  bioSlides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", function () {
      showBioSlide(index);
    });
    bioDotsContainer.appendChild(dot);
  });

  function showBioSlide(index) {
    bioSlides.forEach(slide => slide.classList.remove("active"));
    const bioDots = document.querySelectorAll("#bio-dots .dot");
    bioDots.forEach(dot => dot.classList.remove("active"));
    bioSlides[index].classList.add("active");
    bioDots[index].classList.add("active");
    currentBioSlide = index;
  }
  // Auto sliding disabled for Bio slider

  /* ----------------------------------
         PROJECTS SLIDER (Section 2)
  ---------------------------------- */
  const projectSlides = document.querySelectorAll(".project-slide");
  let currentProjectSlide = 0;
  const projectPrevButton = document.querySelector(".project-prev");
  const projectNextButton = document.querySelector(".project-next");

  function showProjectSlide(index) {
    projectSlides.forEach(slide => slide.classList.remove("active"));
    projectSlides[index].classList.add("active");
  }

  if (projectPrevButton) {
    projectPrevButton.addEventListener("click", function () {
      currentProjectSlide =
        (currentProjectSlide - 1 + projectSlides.length) % projectSlides.length;
      showProjectSlide(currentProjectSlide);
    });
  }

  if (projectNextButton) {
    projectNextButton.addEventListener("click", function () {
      currentProjectSlide =
        (currentProjectSlide + 1) % projectSlides.length;
      showProjectSlide(currentProjectSlide);
    });
  }

  

  updateGallery();
});











 /* ----------------------------------
         WORK SLIDER (Section 3)
  ---------------------------------- */
  const workSlides = document.querySelectorAll(".work-slide");
  let currentWorkSlide = 0;
  const workPrevButton = document.querySelector(".work-prev");
  const workNextButton = document.querySelector(".work-next");

  function showWorkSlide(index) {
    workSlides.forEach(slide => slide.classList.remove("active"));
    workSlides[index].classList.add("active");
  }

  if (workPrevButton) {
    workPrevButton.addEventListener("click", function () {
      currentWorkSlide =
        (currentWorkSlide - 1 + workSlides.length) % workSlides.length;
      showWorkSlide(currentWorkSlide);
    });
  }

  if (workNextButton) {
    workNextButton.addEventListener("click", function () {
      currentWorkSlide =
        (currentWorkSlide + 1) % workSlides.length;
      showWorkSlide(currentWorkSlide);
    });
  }