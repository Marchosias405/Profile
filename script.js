document.addEventListener("DOMContentLoaded", function () {
  /* ====================================================
     Mobile Navigation Toggle
  ==================================================== */
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");
  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
    // Close the mobile menu when a nav link is clicked
    const navLinks = document.querySelectorAll("#nav-menu li a");
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove("active");
        }
      });
    });
  }

  /* ====================================================
     BIO SLIDER (Section 1)
  ==================================================== */
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

  /* ====================================================
     PROJECTS SLIDER (Section 2)
  ==================================================== */
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

  /* ====================================================
     WORK SLIDER (Section 3)
  ==================================================== */
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

  /* ====================================================
     VOLUNTEERING SLIDER (Section 4)
  ==================================================== */
  const volSlides = document.querySelectorAll(".vol-slide");
  let currentVolSlide = 0;
  const volPrevButton = document.querySelector(".vol-prev");
  const volNextButton = document.querySelector(".vol-next");

  function showVolSlide(index) {
    volSlides.forEach(slide => slide.classList.remove("active"));
    volSlides[index].classList.add("active");
  }

  if (volPrevButton) {
    volPrevButton.addEventListener("click", function () {
      currentVolSlide =
        (currentVolSlide - 1 + volSlides.length) % volSlides.length;
      showVolSlide(currentVolSlide);
    });
  }

  if (volNextButton) {
    volNextButton.addEventListener("click", function () {
      currentVolSlide =
        (currentVolSlide + 1) % volSlides.length;
      showVolSlide(currentVolSlide);
    });
  }

  /* ====================================================
     EDUCATION SLIDER (Section 5)
  ==================================================== */
  const eduSlides = document.querySelectorAll(".edu-slide");
  let currentEduSlide = 0;

  function showEduSlide(index) {
    eduSlides.forEach(slide => slide.classList.remove("active"));
    eduSlides[index].classList.add("active");
  }

  // Auto-rotate education slides every 5 seconds
  setInterval(() => {
    currentEduSlide = (currentEduSlide + 1) % eduSlides.length;
    showEduSlide(currentEduSlide);
  }, 5000);

  /* ====================================================
     GALLERY SLIDER (Section 6)
  ==================================================== */
  const gallerySlides = document.querySelectorAll(".gallery-slide");
  const galleryPrevButton = document.querySelector(".gallery-prev");
  const galleryNextButton = document.querySelector(".gallery-next");
  let currentGalleryIndex = 0;

  function updateGallery() {
    // Hide all slides and remove positioning classes
    gallerySlides.forEach(slide => {
      slide.classList.remove("left", "active", "right");
      slide.style.display = "none";
    });
    // Calculate indices for left, center, and right slides (with wrap-around)
    const leftIndex = (currentGalleryIndex - 1 + gallerySlides.length) % gallerySlides.length;
    const rightIndex = (currentGalleryIndex + 1) % gallerySlides.length;
    // Assign classes and display the slides
    gallerySlides[leftIndex].classList.add("left");
    gallerySlides[leftIndex].style.display = "block";
    gallerySlides[currentGalleryIndex].classList.add("active");
    gallerySlides[currentGalleryIndex].style.display = "block";
    gallerySlides[rightIndex].classList.add("right");
    gallerySlides[rightIndex].style.display = "block";
  }

  if (galleryPrevButton) {
    galleryPrevButton.addEventListener("click", function () {
      currentGalleryIndex = (currentGalleryIndex - 1 + gallerySlides.length) % gallerySlides.length;
      updateGallery();
    });
  }

  if (galleryNextButton) {
    galleryNextButton.addEventListener("click", function () {
      currentGalleryIndex = (currentGalleryIndex + 1) % gallerySlides.length;
      updateGallery();
    });
  }

  updateGallery();

  /* ====================================================
     BACKGROUND VIDEO
     (The video element with id="bg-video" plays on loop based on its HTML attributes.)
  ==================================================== */
  // No JavaScript is required for the background video since it's set to autoplay, muted, loop, and playsinline in HTML.
});
