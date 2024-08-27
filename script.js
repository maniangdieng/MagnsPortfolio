console.log("Script chargé et exécuté");

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});


document.addEventListener("DOMContentLoaded", function () {
    const fixedNavbar = document.querySelector(".fixed-navbar");
    const mainHeader = document.querySelector(".main-header");
    let isScrolling;

    window.addEventListener("scroll", function () {
        // Cacher la barre de navigation fixe pendant le défilement
        fixedNavbar.style.display = "none";

        // Effacer le précédent timeout si un nouveau défilement commence
        clearTimeout(isScrolling);

        // Définir un délai pour détecter quand l'utilisateur arrête de défiler
        isScrolling = setTimeout(function () {
            // Vérifier si le header principal est hors de la vue
            if (window.scrollY > mainHeader.offsetHeight) {
                // Afficher la barre de navigation fixe après avoir arrêté de défiler
                fixedNavbar.style.display = "flex";
            }
        }, 350); // Délai avant de réafficher la navbar (en millisecondes)
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll(' .text-content h1, .text-content h5');

    textElements.forEach((element) => {
        const text = element.textContent;

        function typeWriter(index = 0, isDeleting = false) {
            if (!isDeleting && index < text.length) {
                element.textContent = text.substring(0, index + 1);
                setTimeout(() => typeWriter(index + 1), 80);
            } else if (isDeleting && index > 0) {
                element.textContent = text.substring(0, index - 1);
                setTimeout(() => typeWriter(index - 1, true), 50);
            } else {
                setTimeout(() => typeWriter(0, !isDeleting), 1000); // Pause entre la fin d'une boucle et le début de la suivante
            }
        }

        typeWriter();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const photo = document.querySelector('.photo');
    photo.classList.add('show');
});
document.addEventListener("DOMContentLoaded", function() {
    // Ajouter la classe show à la photo et au texte lorsque la page est chargée
    const photo = document.querySelector('.photo');
    const textContent = document.querySelector('.text-content');

    photo.classList.add('show');
    textContent.classList.add('show');
});

document.getElementById('continueButton').addEventListener('click', function() {
    window.location.href = 'about.html';
});




document.addEventListener("DOMContentLoaded", function () {
    const viewMoreButtons = document.querySelectorAll('.view-more-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal-target');
            const modal = document.querySelector(modalId);
            if (modal) {
                modal.style.display = 'flex'; // Afficher la modale
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none'; // Masquer la modale
            }
        });
    });

    // Fermer la modale si on clique en dehors de la zone de contenu
    window.addEventListener('click', function (event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});



  function openForm() {
    var iframe = document.getElementById("formIframe");
    iframe.src = "form.html";
    iframe.style.display = "block"; // Affiche l'iframe lorsque le bouton est cliqué
  }

