let ahref = document.querySelectorAll('a[href^="#"]');

function smoothScrolling() {
    ahref.forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

smoothScrolling();