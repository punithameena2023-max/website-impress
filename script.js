// ================================
// PAGE NAVIGATION
// ================================

function nextPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const targetPage = document.getElementById(pageId);

    if (targetPage) {
        targetPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


// ================================
// START JOURNEY
// ================================

function startJourney() {

    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.4;
        music.play();
    }

    nextPage("question1");
}


// ================================
// PROPOSE DATE
// 27.09.2019
// ================================

function checkDate1() {

    const userDate = document.getElementById("date1").value;
    const message = document.getElementById("message1");

    if (userDate === "") {
        message.innerText = "First enter the date 😌❤️";
        return;
    }

    if (userDate === "2019-09-27") {

        message.innerText = "You remembered... 🥹❤️";

        setTimeout(function() {
            nextPage("betweenSurprise");
        }, 1200);

    } else {

        message.innerText =
            "Aiyooo 😭 That's not the date... Try again 👀";
    }
}


// ================================
// FAVORITE DATE
// 31.07.2026
// ================================

function checkDate2() {

    const userDate = document.getElementById("date2").value;
    const message = document.getElementById("message2");

    if (userDate === "") {
        message.innerText = "Enter a date first 😌❤️";
        return;
    }

    if (userDate === "2026-07-31") {

        message.innerText =
            "YESSS! You remembered this one too! 🥹❤️";

        setTimeout(function() {
            nextPage("littleSurprise");
        }, 1300);

    } else {

        message.innerText =
            "Hmm... not this one 😭 Try again! 👀";
    }
}


// ================================
// QUESTION 3
// ================================

function correctAnswer() {

    const message = document.getElementById("message3");

    if (message) {
        message.innerText =
            "Awww 🥹 You know me so well! ❤️";
    }

    setTimeout(function() {
        nextPage("letter");
    }, 1200);
}


function wrongAnswer() {

    const message = document.getElementById("message3");

    if (message) {
        message.innerText =
            "Hehe 😌 Wrong answer! Try again 👀❤️";
    }
}


// ================================
// FINAL CELEBRATION
// ================================

function celebrate() {

    const celebration =
        document.getElementById("celebration");

    if (celebration) {

        celebration.innerText =
            "✨ Wish made! Happy Birthday once again! ❤️🎂 ✨";

    }

    createConfetti();
}


// ================================
// CONFETTI
// ================================

function createConfetti() {

    for (let i = 0; i < 50; i++) {

        const confetti = document.createElement("div");

        const symbols = [
            "❤️",
            "✨",
            "💗",
            "🎉",
            "💕",
            "⭐"
        ];

        confetti.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize =
            Math.random() * 15 + 15 + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: "translateY(110vh) rotate(360deg)",
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(function() {
            confetti.remove();
        }, duration * 1000);
    }
}