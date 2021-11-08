// alert ("hello world")

// aprire hamburgerMenu
const hamburgerMenuOpen = document.querySelector('.header-right > a');

hamburgerMenuOpen.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.add('active')
    }
);


// chiudere hamburgerMenu
const hamburgerMenuClose = document.querySelector(".close");

hamburgerMenuClose.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.remove('active')
    }
);



