const header = document.querySelector(".list-navbar");
const popularCatSec = document.querySelector(".popular_categories");

window.onscroll = function(e){
    if(window.scrollY >= popularCatSec.offsetTop){
        header.classList.add('header_color');
        header.classList.remove('navbar-dark', 'bg-dark', 'active');
    }else{
        header.classList.remove('header_color');
        header.classList.add('navbar-dark', 'bg-dark', 'active');
    }
}

