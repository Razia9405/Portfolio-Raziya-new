/* =========================================================
   TYPING EFFECT
========================================================= */

const words = [
    "Java Developer",
    "Software Engineer",
    "Data Analyst",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText =
    document.getElementById("typing-text");


function typeEffect() {

    if (!typingText) return;

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}


typeEffect();



/* =========================================================
   SCROLL REVEAL
========================================================= */

const reveals =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    reveals.forEach(
        element => {

            const windowHeight =
                window.innerHeight;

            const elementTop =
                element.getBoundingClientRect()
                .top;


            if (
                elementTop <
                windowHeight - 100
            ) {

                element.classList.add(
                    "active"
                );

            }

        }
    );
}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    const menu =
        document.querySelector(
            ".nav-links"
        );

    menu.classList.toggle(
        "active"
    );
}



/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

document
    .querySelectorAll(".nav-links a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    document
                        .querySelector(
                            ".nav-links"
                        )
                        .classList
                        .remove("active");

                }
            );

        }
    );



/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
    document.querySelector(
        ".navbar"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            navbar.style.boxShadow =
                "0 10px 35px rgba(0,0,0,0.25)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }
);



/* =========================================================
   PROJECT CARD TILT EFFECT
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) / 30;

                const rotateY =
                    (centerX - x) / 30;


                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

            }
        );

    }
);