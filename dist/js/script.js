window.onscroll = function() {
    var navd = document.getElementById('navd');
    var navm = document.getElementById('header');
    if ( window.scrollY > 0 ) {
        navd.classList.add("scroll");
        navm.classList.add("scroll");
    }
    else {
        navd.classList.remove("scroll");
        navm.classList.remove("scroll");
    }
}

const burgir = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
const bodih = document.querySelector("body");
burgir.addEventListener("click", ()=>{
    burgir.classList.toggle("open");
    headerA.classList.toggle("open");
    bodih.classList.toggle("open");
});

// const links = document.querySelectorAll(".links__item h4");
// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     link.querySelector("i").classList.toggle("open");
//     link.nextElementSibling.classList.toggle("open");
//   });
// });

// const starNav = document.querySelectorAll(".coffee__nav__link");
// const starContent = document.querySelectorAll(".coffee__item");
// starNav.forEach((star) => {
//   star.addEventListener("click", () => {
//     starNav.forEach((star) => {
//         star.classList.remove("active");
//       });
//     star.classList.add("active");
//     const activeContent = document.querySelector(`#${star.id}-content`);
//     starContent.forEach((content) => {
//         content.classList.remove("active");
//       });
//     activeContent.classList.add("active");
//   });
// });

