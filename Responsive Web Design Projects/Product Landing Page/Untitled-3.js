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


let colorOption = document.querySelectorAll('.color-links');
let displayStyle = document.querySelector('#display-style');
let displayLimited = document.querySelector('#display-limited');
let displayCamera = document.querySelector('#display-camera');

function colorSwap() {
    colorOption.forEach(color => {
        color.addEventListener('click', function(){
            isLimited = color.getAttribute('data-limited');
            style = color.getAttribute('data-style');
            camera = color.getAttribute('data-src');
            displayStyle.innerHTML = style;
            isLimited === 'yes' ? displayLimited.innerHTML = 'Limited Edition' : displayLimited.innerHTML = '';
            displayCamera.src = camera;
         })
    })
}

colorSwap();