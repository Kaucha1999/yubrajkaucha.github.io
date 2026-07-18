// ==============================
// Navbar Scroll Effect
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "#020617";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(15,23,42,.95)";
        navbar.style.boxShadow = "none";

    }

});


// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// Fade In Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".section").forEach(section => {

    observer.observe(section);

});


// ==============================
// Typing Effect
// ==============================

const title = document.querySelector(".hero h2");

const text = "Electronics Engineering Student";

let index = 0;

function typeText(){

    if(index < text.length){

        title.textContent += text.charAt(index);

        index++;

        setTimeout(typeText,60);

    }

}

title.textContent = "";

typeText();