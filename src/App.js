import React, { useState, useEffect, useRef } from "react";
import "./style.css"; // Use your original CSS here

// -------------------------
// HEADER COMPONENT
// -------------------------
function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive((prev) => !prev);

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setNavActive(false);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="menu-toggle" id="mobile-menu" onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav ${navActive ? "active" : ""}`} id="nav-menu">
          <li><a href="#bio" onClick={handleNavLinkClick}>Bio</a></li>
          <li><a href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
          <li><a href="#work" onClick={handleNavLinkClick}>Work Experience</a></li>
          <li><a href="#volunteering" onClick={handleNavLinkClick}>Volunteering</a></li>
          <li><a href="#education" onClick={handleNavLinkClick}>Education</a></li>
          <li><a href="#hobbies" onClick={handleNavLinkClick}>Hobbies</a></li>
          <li><a href="#resume" onClick={handleNavLinkClick}>Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

// -------------------------
// BIO SECTION WITH SLIDER
// -------------------------
function BioSection() {
  const slides = [
    {
      img: "images/hacathon.jpg",
      text: (
        <>
          <p>About Me:</p>
          <p>🖥️ I am a student majoring in Computing Science.</p>
          <p>🔐 I plan to specialize in cybersecurity and IT compliance.</p>
          <p>🥅 I am a team player and goal-driven.</p>
        </>
      ),
    },
    {
      img: "images/cyber.gif",
      text: (
        <p>
          🔹 Why I am pursuing Security &amp; Tech?<br />
          ✅ Certified ISMS ISO/IEC 27001:2022 Lead Auditor, helping businesses keep their data safe<br />
          📊 Currently pursuing my CISA certification for IT auditing, risk management, and compliance<br />
          💡 Passionate about bridging technology and security to create efficient, secure systems
        </p>
      ),
    },
    {
      img: "images/bsi_award.jpg",
      text: (
        <p>
          🔹 What I’ve Built &amp; Done:<br />
          ⚛️ Developed React-based web apps with API integrations<br />
          🏆 Led teams in international physics competitions and participated in hackathons<br />
          🚀 Founded my school’s first IT club and spearheaded multiple projects<br />
          🌍 Co-founded Surge Studios managing WordPress hosting, client relations, and digital solutions<br />
          🤝 Took on leadership roles in volunteer initiatives including flood relief campaigns and managing a 2,000-member educational community
        </p>
      ),
    },
    {
      img: "images/stage_CID.jpg",
      text: (
        <p>
          🔹 Beyond Tech:<br />
          🗣️ I speak four languages: English, Bengali, Hindi, and Urdu<br />
          🥐 Mastering my fifth language, French (almost at A2 level!)<br />
          🧩 Always excited to learn, collaborate, and take on new challenges
        </p>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => setCurrentIndex(index);
  const prevSlide = () =>
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  const nextSlide = () =>
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);

  return (
    <section id="bio">
      <div className="bio-intro">
        <h1>Hey there!</h1>
        <img src="images/hello.gif" alt="Waving Hand" className="hand-wave" />
        <h1>I’m Kazi</h1>
      </div>
      <div className="bio-slider">
        {slides.map((slide, index) => (
          <div key={index} className={`bio-slide ${index === currentIndex ? "active" : ""}`}>
            <div className="card-image">
              <img src={slide.img} alt={`Slide ${index + 1}`} />
            </div>
            <div className="card-text">{slide.text}</div>
          </div>
        ))}
        <div className="slider-dots" id="bio-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => showSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="bio-nav">
        <button className="bio-prev" onClick={prevSlide}>&#10094;</button>
        <button className="bio-next" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
}

// -------------------------
// PROJECTS SECTION
// -------------------------
function ProjectsSection() {
  const projects = [
    {
      img: "images/map.png",
      title: "Emergency Call Management System",
      details: (
        <>
          <ul>
            <li>A web-based emergency report management system.</li>
            <li>Allows users to submit incident reports with automatic timestamps.</li>
            <li>Uses Nominatim API for location-based suggestions (Alberta, BC) with geocode updates.</li>
            <li>Includes passcode-protected modifications.</li>
            <li>Provides real-time input validation and error feedback.</li>
          </ul>
          <a href="https://github.com/Yunhh-Hahn/272-Map-Assignment.git" target="_blank" rel="noreferrer" className="project-link">
            View on GitHub
          </a>
          <div className="tech-logos">
            <img src="images/react.png" alt="React" />
            <img src="images/js.jpg" alt="JavaScript" />
            <img src="images/css.jpg" alt="CSS" />
            <img src="images/html.jpg" alt="HTML" />
          </div>
        </>
      ),
    },
    {
      img: "images/Fugo.png",
      title: "Fu-Go Défense",
      details: (
        <>
          <ul>
            <li>A web-based game where players control a cannon to defend against incoming threats. Features real-time animations, responsive movement, and interactive gameplay mechanics.</li>
            <li>Uses real-time animations (e.g., cannon wheel rotation, explosions) for an engaging experience.</li>
            <li>Integrates game logic to manage player score, lives, and game-over conditions.</li>
          </ul>
          <a href="https://github.com/Marchosias405/Fu-Go-D-fense.git" target="_blank" rel="noreferrer" className="project-link">
            View on GitHub
          </a>
          <div className="tech-logos">
            <img src="images/js.jpg" alt="JavaScript" />
            <img src="images/css.jpg" alt="CSS" />
            <img src="images/html.jpg" alt="HTML" />
          </div>
        </>
      ),
    },
    {
      img: "images/leaves.png",
      title: "Laughing with Leaves",
      details: (
        <>
          <ul>
            <li>A riddle-based web game challenging players to solve leaf-themed puzzles. Each correct answer grows a virtual tree, symbolizing learning and progress.</li>
            <li>Includes a client-side web app and a Node.js server.</li>
          </ul>
          <a href="https://github.com/dqhntt/Leaf-Pun-Quiz.git" target="_blank" rel="noreferrer" className="project-link">
            View on GitHub
          </a>
          <div className="tech-logos">
            <img src="images/js.jpg" alt="JavaScript" />
            <img src="images/css.jpg" alt="CSS" />
            <img src="images/html.jpg" alt="HTML" />
          </div>
        </>
      ),
    },
    {
      img: "images/board.png",
      title: "Road Duel",
      details: (
        <p>
          A grid-based board game set in a post-apocalyptic world. Players navigate 64 intersections across three distinct zones, racing to reach the antidote first. The game incorporates traffic signal mechanics, strategy cards, and environmental hazards.
          <br />
          <a href="https://drive.google.com/file/d/17IPQDzXhvB84KamPzmnXb4NUrL4jgbHS/view" target="_blank" rel="noreferrer" className="project-link">
            View Game Design Document
          </a>
        </p>
      ),
    },
    {
      img: "images/beamline.png",
      title: "Beamline for Schools Competition",
      details: (
        <p>
          An international physics competition where teams design particle physics experiments for real CERN beamlines. Led a team through research, presentation drafting, and project submission.
          <br />
          <a href="https://beamlineforschools.cern/" target="_blank" rel="noreferrer" className="project-link">
            Learn More
          </a>
        </p>
      ),
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-slider-container">
        <div className="project-slider">
          {projects.map((project, index) => (
            <div key={index} className={`project-slide ${index === currentProject ? "active" : ""}`}>
              <div className="project-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-text">
                <h3>{project.title}</h3>
                {project.details}
              </div>
            </div>
          ))}
        </div>
        <div className="project-nav">
          <button className="project-prev" onClick={prevProject}>&#10094;</button>
          <button className="project-next" onClick={nextProject}>&#10095;</button>
        </div>
      </div>
    </section>
  );
}

// -------------------------
// TECH SECTION (Rotating Bearing Animation)
// -------------------------
function TechSection() {
  const bearingRef = useRef(null);

  useEffect(() => {
    const bearing = bearingRef.current;
    if (!bearing) return;
    const wrappers = bearing.querySelectorAll(".bearing-logo-wrapper");
    const totalLogos = wrappers.length;
    const radius = bearing.offsetWidth / 2 - 30; // Adjust based on logo size
    let startTime = null;

    function animate(time) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const rotationAngle = (elapsed / 8000) * 360; // 8-second full rotation
      wrappers.forEach((wrapper, index) => {
        const baseAngle = (360 / totalLogos) * index;
        const currentAngle = baseAngle + rotationAngle;
        wrapper.style.left = "50%";
        wrapper.style.top = "50%";
        wrapper.style.transform = `rotate(${currentAngle}deg) translate(${radius}px) rotate(-${currentAngle}deg)`;
      });
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="tech">
      <h2>Languages and Frameworks</h2>
      <div className="section-box">
        <div className="rotating-bearing" ref={bearingRef}>
          <div className="bearing-logo-wrapper">
            <img src="images/reactlogo.png" className="bearing-logo" alt="React" />
          </div>
          <div className="bearing-logo-wrapper">
            <img src="images/node.png" className="bearing-logo" alt="Node.js" />
          </div>
          <div className="bearing-logo-wrapper">
            <img src="images/python.png" className="bearing-logo" alt="Python" />
          </div>
          <div className="bearing-logo-wrapper">
            <img src="images/jslogo.png" className="bearing-logo" alt="JavaScript" />
          </div>
          <div className="bearing-logo-wrapper">
            <img src="images/c.png" className="bearing-logo" alt="C" />
          </div>
          <div className="bearing-logo-wrapper">
            <img src="images/cpp.png" className="bearing-logo" alt="C++" />
          </div>
          {/* Add more logos if needed */}
        </div>
      </div>
    </section>
  );
}

// -------------------------
// WORK EXPERIENCE SECTION
// -------------------------
function WorkSection() {
  const workExperiences = [
    {
      logo: "images/Surge.png",
      title: "Cofounder and WordPress Site Administrator",
      company: "Surge Studios – Dhaka, Bangladesh",
      duration: "Jun 2023 – Jan 2025",
      details: (
        <ul>
          <li>Developed the company's website using WordPress with custom themes and plugins.</li>
          <li>Managed hosting and deployed sites using cPanel.</li>
          <li>Generated leads and streamlined collaboration with Google Sheets, Dropbox, and Microsoft Teams.</li>
        </ul>
      ),
      link: {
        url: "https://www.facebook.com/share/1BCzpbkvGr/?mibextid=wwXIfr",
        text: "Visit Facebook Page",
      },
    },
    {
      logo: "images/ITclub.jpg",
      title: "Cofounder",
      company: "Information Technology Club – Dhaka, Bangladesh",
      duration: "Jan 2019 – Dec 2021",
      details: (
        <ul>
          <li>Founded the school's first IT club with support from the head of IT.</li>
          <li>Organized interactive club activities and HTML/CSS assignments.</li>
          <li>Delivered lectures on tech topics and managed network configurations.</li>
        </ul>
      ),
    },
    {
      logo: "images/puffin.webp",
      title: "Afterschool Program Instructor",
      company: "Professor Puffin’s Challenge Club – Burnaby, British Columbia",
      duration: "Sep 2024 – Present",
      details: (
        <ul>
          <li>Assisted in classroom management and maintained activity schedules.</li>
          <li>Prepared class materials (e.g., name tags) and supported administrative tasks.</li>
          <li>Reported student absences and notable characteristics for follow-up.</li>
          <li>Delivered engaging activity presentations to boost student participation.</li>
        </ul>
      ),
      link: {
        url: "https://professorpuffin.ca/",
        text: "Visit Website",
      },
    },
    {
      logo: "images/UPS.jpg",
      title: "Sales Associate",
      company: "The UPS Store – Port Moody, British Columbia",
      duration: "Jan 2024 – Present",
      details: (
        <ul>
          <li>Processed shipments (UPS, DHL, FedEx, etc.) via iShip and Freightcom.</li>
          <li>Communicated with clients to resolve complex shipping and document needs.</li>
          <li>Collaborated with partners (Iron Mountain, Pro Passport, Novex, UPS, DHL) to coordinate schedules.</li>
          <li>Edited documents with Photoshop and handled printing, scanning, binding, and cutting.</li>
          <li>Enforced security protocols and managed sensitive information per company policies.</li>
        </ul>
      ),
      link: {
        url: "https://www.theupsstore.ca/",
        text: "Visit Website",
      },
    },
  ];

  const [currentWork, setCurrentWork] = useState(0);

  const prevWork = () =>
    setCurrentWork((prev) => (prev === 0 ? workExperiences.length - 1 : prev - 1));
  const nextWork = () =>
    setCurrentWork((prev) => (prev === workExperiences.length - 1 ? 0 : prev + 1));

  const currentExp = workExperiences[currentWork];

  return (
    <section id="work">
      <h2>Work Experience</h2>
      <div className="work-slider-container">
        <div className="work-slider">
          <div className="work-slide active">
            <img src={currentExp.logo} alt={currentExp.company} className="round-logo" />
            <div className="work-text">
              <div className="text-content">
                <h3>{currentExp.title}</h3>
                <p>
                  <strong>{currentExp.company}</strong>
                  <br />
                  {currentExp.duration}
                </p>
                {currentExp.details}
                {currentExp.link && (
                  <a
                    href={currentExp.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="experience-button"
                  >
                    {currentExp.link.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="work-nav">
          <button className="work-prev" onClick={prevWork}>&#10094;</button>
          <button className="work-next" onClick={nextWork}>&#10095;</button>
        </div>
      </div>
    </section>
  );
}

// -------------------------
// VOLUNTEERING SECTION
// -------------------------
function VolunteeringSection() {
  const volunteeringExperiences = [
    {
      logo: "images/vum.jpg",
      title: "Volunteer Tutor",
      company: "Vancouver Urban Ministries – Vancouver, British Columbia, Canada",
      duration: "Jan – Nov 2024",
      details: (
        <ul>
          <li>Received training in the Orton-Gillingham approach for dyslexia, ADHD, FASD, and autism.</li>
          <li>Tutored a 4th-grade student in math (2 hours per week) throughout the school year.</li>
          <li>Submitted progress reports each term to monitor improvement.</li>
          <li>Communicated with parents to adjust strategies based on feedback.</li>
        </ul>
      ),
      link: {
        url: "https://www.myvum.ca/",
        text: "Visit Website",
      },
    },
    {
      logo: "images/empathy1.jpg",
      title: "Volunteer Team Lead",
      company: "Empathy – Dhaka, Bangladesh",
      duration: "May 2020 – Jun 2023",
      details: (
        <ul>
          <li>Worked with teams to distribute goods during floods, festivities, and COVID-19 awareness campaigns.</li>
          <li>Led teams of 3 volunteers during festive campaigns.</li>
        </ul>
      ),
      link: {
        url: "https://www.facebook.com/share/18LJzHVinR/?mibextid=wwXIfr",
        text: "Visit Facebook Page",
      },
    },
    {
      logo: "images/discord.webp",
      title: "Founder and Administrator",
      company: "GNOSIS Discord Server",
      duration: "Jul 2020 – Jun 2021",
      details: (
        <ul>
          <li>Managed a 2,000-member community sharing educational resources and facilitating discussions.</li>
          <li>Moderated activities to maintain a collaborative environment.</li>
          <li>Handled bots, users, channels, and roles.</li>
          <li>Ethically decommissioned the server after addressing copyright concerns.</li>
        </ul>
      ),
    },
  ];

  const [currentVol, setCurrentVol] = useState(0);

  const prevVol = () =>
    setCurrentVol((prev) => (prev === 0 ? volunteeringExperiences.length - 1 : prev - 1));
  const nextVol = () =>
    setCurrentVol((prev) => (prev === volunteeringExperiences.length - 1 ? 0 : prev + 1));

  const currentExperience = volunteeringExperiences[currentVol];

  return (
    <section id="volunteering">
      <h2>Volunteering Experience</h2>
      <div className="vol-slider-container">
        <div className="vol-slider">
          <div className="vol-slide active">
            <img src={currentExperience.logo} alt={currentExperience.company} className="round-logo" />
            <div className="vol-text">
              <h3>{currentExperience.title}</h3>
              <p>
                <strong>{currentExperience.company}</strong>
                <br />
                {currentExperience.duration}
              </p>
              {currentExperience.details}
              {currentExperience.link && (
                <a
                  href={currentExperience.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="experience-button"
                >
                  {currentExperience.link.text}
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="vol-nav">
          <button className="vol-prev" onClick={prevVol}>&#10094;</button>
          <button className="vol-next" onClick={nextVol}>&#10095;</button>
        </div>
      </div>
    </section>
  );
}

// -------------------------
// EDUCATION SECTION (Auto-Rotating Slider)
// -------------------------
function EducationSection() {
  const eduSlides = [
    {
      img: "images/SFU.jpg",
      text: (
        <>
          <p>Simon Fraser University</p>
          <p>Burnaby, British Columbia, Canada</p>
          <p>Bachelor of Applied Science, Computing Science</p>
          <p>Sep 2023 – Sep 2027</p>
        </>
      ),
    },
    {
      img: "images/SFUme.jpg",
      text: (
        <>
          <p>Simon Fraser University</p>
          <p>Burnaby, British Columbia, Canada</p>
          <p>Bachelor of Applied Science, Computing Science</p>
          <p>Sep 2023 – Sep 2027</p>
        </>
      ),
    },
  ];

  const [currentEdu, setCurrentEdu] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEdu((prev) => (prev + 1) % eduSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [eduSlides.length]);

  return (
    <section id="education">
      <h2>Education</h2>
      <div className="edu-slider">
        {eduSlides.map((slide, index) => (
          <div key={index} className={`edu-slide ${index === currentEdu ? "active" : ""}`}>
            <img src={slide.img} alt={`Education ${index + 1}`} />
            <div className="edu-text">{slide.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// -------------------------
// HOBBIES SECTION (Gallery Slider)
// -------------------------
function HobbiesSection() {
  const galleryImages = [
    "images/Eartgrul.jpg",
    "images/liberty_back.jpg",
    "images/liberty_front.jpg",
    "images/NY.jpg",
    "images/tesla.jpg",
    "images/india.jpg",
    "images/steak.jpg",
    "images/shrimp.jpg",
    "images/burger.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const leftIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  const rightIndex = (currentIndex + 1) % galleryImages.length;

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);

  return (
    <section id="hobbies">
      <h2>Hobbies &amp; Interests</h2>
      <div className="gallery-slider-container">
        <div className="gallery-slider">
          {galleryImages.map((img, index) => {
            let className = "";
            if (index === leftIndex) className = "left";
            else if (index === currentIndex) className = "active";
            else if (index === rightIndex) className = "right";
            return (
              <div key={index} className={`gallery-slide ${className}`} style={{ display: className ? "block" : "none" }}>
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="gallery-nav">
        <button className="gallery-prev" onClick={prevSlide}>&#10094;</button>
        <button className="gallery-next" onClick={nextSlide}>&#10095;</button>
      </div>
      <p className="gallery-caption">I like food and exploration</p>
    </section>
  );
}

// -------------------------
// RESUME SECTION
// -------------------------
function ResumeSection() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="resume-container">
        <p>Download my latest resume:</p>
        <a href="KAZI_RESUME.pdf" target="_blank" rel="noreferrer" className="resume-link">
          View Resume
        </a>
      </div>
    </section>
  );
}

// -------------------------
// FOOTER COMPONENT
// -------------------------
function Footer() {
  return (
    <footer>
      <div className="social-media">
        <a href="https://github.com/Marchosias405" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github-alt"></i> GitHub
        </a>
        <a href="https://www.instagram.com/marchosias405/?igsh=a3gyamtneDJhMWtn#" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram"></i> Instagram
        </a>
        <a href="https://www.linkedin.com/in/kazi-boni-amin" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
        <a href="mailto:boinirhythm@gmail.com">
          <i className="fa-regular fa-envelope"></i> bonirhythm@gmail.com
        </a>
      </div>
    </footer>
  );
}

// -------------------------
// MAIN APP COMPONENT
// -------------------------
function App() {
  return (
    <>
      <video id="bg-video" src="images/loop.mp4" autoPlay muted loop playsInline></video>
      <Header />
      <main>
        {/* Wrap sections in a container if desired */}
        <div className="container">
          <BioSection />
          <ProjectsSection />
          <TechSection />
          <WorkSection />
          <VolunteeringSection />
          <EducationSection />
          <HobbiesSection />
          <ResumeSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
