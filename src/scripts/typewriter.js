document.addEventListener("DOMContentLoaded", () => {
    const cta = document.querySelector(".editorial-content .typewriter-cta");
    if (!cta) return;

    const textSpan = cta.querySelector(".typewriter-text");
    const fullText = cta.getAttribute("data-text") || "";
    let charIndex = 0;
    let isTyping = false;

    function typeWriter() {
        if (charIndex < fullText.length) {
            textSpan.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50); // Typing speed (ms per letter)
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isTyping) {
                isTyping = true;
                typeWriter();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(cta);
});
