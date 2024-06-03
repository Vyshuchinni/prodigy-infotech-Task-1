// script.js

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.color = '#ff9900';
    });
    item.addEventListener('mouseout', function() {
        this.style.color = '';
    });
});
