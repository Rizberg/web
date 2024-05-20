window.onload = function() {
    setInterval(function() {
        var freeshippingSection = document.querySelector('.freeshipping');
        freeshippingSection.classList.toggle('show');
    }, 5000); // 5000 milliseconds = 5 seconds
}

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var sectionTrigger = document.querySelector('.break');

    // Hämta y-positionen för sektionen som ska vara trigger
    var triggerOffset = sectionTrigger.offsetTop;

    // Om användaren har skrollat längre ner än höjden av triggersektionen
    if (window.pageYOffset > triggerOffset) {
        // Visa navigationsmenyn genom att lägga till klassen "fixed"
        nav.classList.add('fixed');
    } else {
        // Annars, ta bort klassen "fixed"
        nav.classList.remove('fixed');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const figureCaptions = document.querySelectorAll(".collections figure figcaption");

    figureCaptions.forEach(caption => {
        caption.style.opacity = "0"; // Göm texten som standard
        caption.parentNode.addEventListener("mouseenter", function() {
            caption.style.opacity = "1"; // Visa texten när musen hovrar över figuren
        });
        caption.parentNode.addEventListener("mouseleave", function() {
            caption.style.opacity = "0"; // Göm texten när musen lämnar figuren
        });
    });
});
