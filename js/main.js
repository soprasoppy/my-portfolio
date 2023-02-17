
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (this.scrollY > 20) {
            document.querySelector('.navbar').classList.add("sticky");
        } else {
            document.querySelector('.navbar').classList.remove("sticky");
        }
    });

    document.querySelector('.menu-btn').addEventListener('click', function () {
        document.querySelector('.navbar .menu').toggleClass("active");
        document.querySelector('.menu-btn i').toggleClass("active");
    })

}, false);

// Scroll to top button script
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});