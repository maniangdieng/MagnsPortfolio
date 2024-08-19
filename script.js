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

    window.addEventListener("scroll", function () {
        // Si le défilement dépasse la hauteur du header principal, afficher la navbar fixe
        if (window.scrollY > mainHeader.offsetHeight) {
            fixedNavbar.style.display = "flex";
        } else {
            fixedNavbar.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll('.text-content h5, .text-content h1, .text-content h4');

    textElements.forEach((element) => {
        const text = element.textContent;
        element.textContent = ''; 
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50); 
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
