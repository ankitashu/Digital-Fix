console.log("The Digital Fix Website Loaded");

// Search Box

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");

searchBtn.addEventListener("click", () => {

    if (searchBox.style.display === "block") {

        searchBox.style.display = "none";

    } else {

        searchBox.style.display = "block";

    }

});



// Counter On Scroll

const counters = document.querySelectorAll(".counter");

let started = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter-section");

    const sectionTop = counterSection.offsetTop - 300;

    if (window.scrollY > sectionTop && !started) {

        counters.forEach(counter => {

            let target = +counter.getAttribute("data-target");

            let count = 0;

            let increment = target / 100;

            let updateCounter = () => {

                if (count < target) {

                    count += increment;

                    counter.innerText = Math.ceil(count);

                    setTimeout(updateCounter, 20);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

        started = true;

    }

});

// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

// Show Button On Scroll

window.onscroll = function () {

    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    }
    else {

        topBtn.style.display = "none";

    }

};

// Scroll To Top

if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });
}


// Appointment Form


const form = document.getElementById("appointmentForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            form.querySelector('[name="name"]').value.trim();

        const email =
            form.querySelector('[name="email"]').value.trim();

        const phone =
            form.querySelector('[name="phone"]').value.trim();

        const date =
            form.querySelector('input[type="date"]').value;

        const time =
            form.querySelector('input[type="time"]').value;

        const service =
            form.querySelector('.form-select').value;

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phonePattern =
            /^[0-9]{10}$/;

        /* Name Validation */

        if (name.length < 3) {

            alert("Please enter a valid name.");
            return;

        }

        /* Email Validation */

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");
            return;

        }

        /* Mobile Validation */

        if (!phonePattern.test(phone)) {

            alert("Please enter a valid 10 digit mobile number.");
            return;

        }

        /* Date Validation */

        if (date === "") {

            alert("Please select appointment date.");
            return;

        }

        /* Time Validation */

        if (time === "") {

            alert("Please select appointment time.");
            return;

        }

        /* Service Validation */

        if (service === "Select Service") {

            alert("Please select a service.");
            return;

        }

        /* Success Message */

        alert("Appointment Booked Successfully!");

        form.reset();

    });

}

/* ===========================
   Newsletter Subscribe
=========================== */

const subscribeBtn =
    document.getElementById("subscribeBtn");

const newsletterEmail =
    document.getElementById("newsletterEmail");

subscribeBtn.addEventListener("click", function () {

    const email =
        newsletterEmail.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        alert("Please enter your email address.");
        return;

    }

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");
        return;

    }

    alert("Thank you for subscribing!");

    newsletterEmail.value = "";

});

/* ==========================
   Preloader
========================== */

window.addEventListener("load", function () {

    const preloader =
        document.getElementById("preloader");

    setTimeout(function () {

        preloader.style.opacity = "0";

        preloader.style.transition =
            "0.5s ease";

        setTimeout(function () {

            preloader.style.display = "none";

        }, 500);

    }, 2000); // 2 Seconds

});


const pageLinks =
    document.querySelectorAll(".page-link");

pageLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const url = this.href;

        const preloader =
            document.getElementById("preloader");

        preloader.style.display = "flex";

        setTimeout(function () {

            window.location.href = url;

        }, 2000);

    });

});

/* ==========================
   Contact Form Validation
========================== */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            contactForm.querySelector('[name="name"]').value.trim();

        const email =
            contactForm.querySelector('[name="email"]').value.trim();

        const phone =
            contactForm.querySelector('[name="phone"]').value.trim();

        const subject =
            contactForm.querySelector('[name="subject"]').value.trim();

        const message =
            contactForm.querySelector('[name="message"]').value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phonePattern =
            /^[0-9]{10}$/;

        if (name.length < 3) {

            alert("Please enter a valid name.");
            return;

        }

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");
            return;

        }

        if (!phonePattern.test(phone)) {

            alert("Please enter a valid 10 digit mobile number.");
            return;

        }

        if (subject === "") {

            alert("Please enter subject.");
            return;

        }

        if (message.length < 10) {

            alert("Message must contain at least 10 characters.");
            return;

        }

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}

/* Hero Slider Animation Fix */

/* ==========================
   Hero Slider Animation
========================== */

const heroSlider = document.getElementById("heroSlider");

if (heroSlider) {

    function runHeroAnimation() {

        const firstSlide =
            document.querySelector("#heroSlider .carousel-item:first-child");

        firstSlide.classList.remove("run-animation");

        void firstSlide.offsetWidth;

        firstSlide.classList.add("run-animation");
    }

    // Page Load

    window.addEventListener("load", function () {

        setTimeout(function () {

            runHeroAnimation();

        }, 2500);

    });

    // Every Time Slide Changes

    heroSlider.addEventListener("slid.bs.carousel", function () {

        const activeSlide =
            document.querySelector("#heroSlider .carousel-item.active");

        const firstSlide =
            document.querySelector("#heroSlider .carousel-item:first-child");

        if (activeSlide === firstSlide) {

            runHeroAnimation();

        }

    });

}


/* Auto Popup After 10 Seconds */

window.addEventListener("load", function(){

    setTimeout(function(){

        document
        .getElementById("bookingPopup")
        .style.display = "flex";

    },5000);

});

/* Close Popup */

const closePopup =
document.getElementById("closePopup");

if(closePopup){

closePopup.addEventListener("click",function(){

    document
    .getElementById("bookingPopup")
    .style.display = "none";

});

}

// popupForm.addEventListener("submit", function(e){

//     e.preventDefault();

//     window.location.href = "thankyou.html";

// });

const popupForm = document.getElementById("popupForm");

if(popupForm){

popupForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    popupForm.querySelector('input[type="text"]').value.trim();

    const phone =
    popupForm.querySelector('input[type="tel"]').value.trim();

    const service =
    popupForm.querySelector('select').value;

    const phonePattern = /^[0-9]{10}$/;

    if(name.length < 3){

        alert("Please enter valid name");
        return;
    }

    if(!phonePattern.test(phone)){

        alert("Please enter valid 10 digit mobile number");
        return;
    }

    if(service === ""){

        alert("Please select a service");
        return;
    }

    window.location.href = "thankyou.html";

});

}