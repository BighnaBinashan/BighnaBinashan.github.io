// /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar";
//     }
//   }

//Menu function
const navMenu = document.getElementById("nav_menu"),
    navToggle =document.getElementById("nav_toggle"),
    navClose = document.getElementById("nav_close")

// validate if it exist
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show_menu');
    });
};

// Hide menu function
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show_menu');
    });
}

// Remove mobile menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each menu link, we remove the show-menu class
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))