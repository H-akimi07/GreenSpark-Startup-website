// Navbar Scroll Effect
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("nav-scroll");
    } else {
        navbar.classList.remove("nav-scroll");
    }

});

// AOS Initialization
AOS.init({
    duration: 1000,
    once: true
});


/* Counter Animation */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target+"+";

}

}

updateCounter();

});