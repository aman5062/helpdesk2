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

window.addEventListener("load",function(){
    var loader = document.getElementById("preprocessor");
    loader.style.display = "none";
})

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('#myNav .nav-link');
    // Get the current URL path without the domain
    const currentPath = window.location.pathname;

    // Loop through the navigation links
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const isCurrentPage = currentPath.endsWith(linkHref);

        // Check if the current page matches the link's href attribute
        if (isCurrentPage) {
            link.classList.add('active');
            link.classList.remove('text-black');
        } else {
            link.classList.remove('active');
            link.classList.add('text-black');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector("#myDropdown");
    const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
    const dropdownItems = dropdownMenu.querySelectorAll(".dropdown-item");

    dropdownToggle.addEventListener("click", function(event) {
        event.preventDefault();

        // Toggle the 'show' class to expand/collapse the dropdown menu
        if (!dropdownMenu.classList.contains("show")) {
            dropdownMenu.classList.add("show");
        } else {
            dropdownMenu.classList.remove("show");
        }
    });

});