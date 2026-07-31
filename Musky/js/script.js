/* ==================================================
            PROJECT MUSKY ❤️
            FINAL SCRIPT.JS
==================================================*/


/* ==================================================
            FALLING ROSE PETALS
==================================================*/

const petals = document.getElementById("petals");

if (petals) {

    for (let i = 0; i < 25; i++) {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.animationDuration =
            8 + Math.random() * 6 + "s";

        petal.style.animationDelay =
            Math.random() * 5 + "s";

        petal.style.opacity =
            0.4 + Math.random() * 0.6;

        petals.appendChild(petal);

    }

}


/* ==================================================
                    SPARKLES
==================================================*/

const sparkles = document.getElementById("sparkles");

if (sparkles) {

    for (let i = 0; i < 60; i++) {

        const spark = document.createElement("div");

        spark.className = "spark";

        spark.style.left = Math.random() * 100 + "vw";

        spark.style.top = Math.random() * 100 + "vh";

        spark.style.animationDelay =
            Math.random() * 5 + "s";

        sparkles.appendChild(spark);

    }

}


/* ==================================================
                    INTRO
==================================================*/

const intro = document.getElementById("intro");

if (intro) {

    setTimeout(() => {

        intro.classList.add("hideIntro");

    }, 5000);

}


/* ==================================================
                HERO BUTTON
==================================================*/

const heroButton = document.querySelector(".hero-btn");

if (heroButton) {

    heroButton.addEventListener("click", function (e) {

        e.preventDefault();

        document
            .getElementById("chapter1")
            .scrollIntoView({

                behavior: "smooth"

            });

    });

}


/* ==================================================
                LOVE LETTER
==================================================*/

const envelope = document.getElementById("envelope");

const paper = document.getElementById("letterPaper");

const output = document.getElementById("typedLetter");

const letterParagraphs = [

`Happy Girlfriend's Day, my love.`,

`I don't think words will ever be enough to explain what you truly mean to me.

Before you came into my life, I never imagined that one person could change everything.

But then...

you happened.`,

`Since the day we started our journey together, my life has been filled with more smiles, more laughter, and more happiness than I ever thought possible.`,

`You have become my favourite part of every day.

You're the first person I want to tell when something good happens.

The first person I miss.

The first person I think about.`,

`Thank you...

For your love.

For your patience.

For believing in me.

For accepting me exactly the way I am.`,

`Thank you for becoming the most beautiful chapter of my life.`,

`No matter where life takes us...

I'll always choose you.

Again.

Again.

And every single time.`,

`I promise to always stand beside you.

To support your dreams.

To make you smile whenever I can.

To remind you every single day
how deeply you are loved.`,

`Some of my happiest memories
have one thing in common...

You.`,

`And before I finish this letter...

there's just one last thing
I need you to know...`,

`❤️

I love you more than anything baby.

❤️`,

`Forever Yours,

Parth ❤️`

];

let opened = false;

if (envelope && paper && output) {

    envelope.addEventListener("click", () => {

        if (opened) return;

        opened = true;

        paper.classList.remove("hidden");

        output.innerHTML = "";

        envelope.style.transform =
            "rotateX(180deg) scale(.95)";

        let index = 0;

        function showParagraph() {

            if (index >= letterParagraphs.length)
                return;

            const paragraph =
                document.createElement("p");

            paragraph.className =
                "letter-line";

            paragraph.textContent =
                letterParagraphs[index];

            output.appendChild(paragraph);

            output.scrollTop =
                output.scrollHeight;

            index++;

            setTimeout(showParagraph, 1700);

        }

        showParagraph();

    });

}
/* ==========================================
        SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:.25

}

);

reveals.forEach(section=>{

observer.observe(section);

});