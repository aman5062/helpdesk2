function myFunction(){var a=document.getElementById("myTopnav");"topnav"===a.className?a.className+=" responsive":a.className="topnav";var s=document.getElementById("bar");"fa fa-bars"===s.className?s.className="fa fa-times":s.className="fa fa-bars"}
// JavaScript in script.js or within <script> tags in HTML

window.addEventListener('scroll', function () {
    const goToTopButton = document.getElementById('goToTopButton');
    if (window.scrollY > 300) { // Adjust this value based on your needs
        goToTopButton.style.display = 'block';
    } else {
        goToTopButton.style.display = 'none';
    }
});

document.getElementById('goToTopButton').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
