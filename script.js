/* ==========================================================================
   1. ELEMENT SELECTORS
   ========================================================================== */
const envelope = document.getElementById("envelope_form");
const seal = document.querySelector(".seal");
const form = document.getElementById("form");
const btnNo = document.querySelector(".btn_no");
const letter = document.querySelector(".env_form_wrap");
const blackout = document.querySelector(".fade_out_screen");
const finalReveal = document.getElementById("final_reveal");
const audio = document.getElementById("tape_recorder"); // Targeted for stopping

/* ==========================================================================
   2. HELPER FUNCTIONS
   ========================================================================== */
const stopAllAudio = () => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
};

/* ==========================================================================
   3. ENVELOPE INTERACTION (OPENING)
   ========================================================================== */
if (seal) {
  seal.addEventListener("click", (e) => {
    e.stopPropagation();
    envelope.classList.add("open");
  });
}

/* ==========================================================================
   4. PROPOSAL SUBMISSION (THE "YES" PATH)
   ========================================================================== */
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Stop audio immediately on click
    stopAllAudio();

    envelope.classList.add("sent");

    setTimeout(() => {
      envelope.classList.remove("open");
    }, 200);

    setTimeout(() => {
      envelope.classList.add("fly");

      setTimeout(() => {
        if (finalReveal) {
          finalReveal.style.display = "block";
          finalReveal.classList.remove("hidden");
        }
      }, 1000);
    }, 600);
  });
}

/* ==========================================================================
   5. REJECTION HANDLING (THE "NO" PATH)
   ========================================================================== */
if (btnNo) {
  btnNo.addEventListener("click", () => {
    // Stop audio immediately on click
    stopAllAudio();

    if (letter) letter.classList.add("letter-vanish");

    setTimeout(() => {
      if (blackout) blackout.classList.add("active");
    }, 500);
  });
}
