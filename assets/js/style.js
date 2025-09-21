const header = document.querySelector(".list-navbar");
const popularCatSec = document.querySelector(".popular_categories");
const productDetails = document.querySelector(".product_info_js");

window.onscroll = function () {
    if (window.scrollY >= popularCatSec.offsetTop) {
        header.classList.add('header_color');
        header.classList.remove('navbar-dark', 'bg-dark', 'active');        
    } else {
        header.classList.remove('header_color');
        header.classList.add('navbar-dark', 'bg-dark', 'active');
    }
};


const customModal = () => {
    const myModal  = document.getElementById("staticBackdrop");
    const images   = Array.from(document.querySelectorAll(".js_product_img"));
    const thumbnails = Array.from(document.querySelectorAll(".js-img"));
    const closeBtn = document.querySelector(".close-btn");
    const eyeBtns  = Array.from(document.querySelectorAll(".showOn_modal"));
    const upBtn    = document.querySelector(".btn-up");
    const downBtn  = document.querySelector(".btn-down");
    const modalImg = document.querySelector(".modal_img_js");

    let currentIndex = 0;
    let modalFlag = false;

    const hideModal = () => {
        myModal.classList.remove("show");
        modalFlag = false;
    }

    const showModal = (index) => {
        modalImg.src = images[index].src;
        myModal.classList.add("show");
        modalFlag = true;
        currentIndex = index;
    }

    eyeBtns.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
        e.preventDefault();
        showModal(index);
        updateImage(index);
    });
    });

    closeBtn.addEventListener("click", hideModal);

    document.addEventListener("click", (e) => {
        if (modalFlag && e.target === myModal) hideModal();
    });

    
    const updateImage = (newIndex) => {
        if (newIndex < 0) newIndex = thumbnails.length - 1;
        if (newIndex >= thumbnails.length) newIndex = 0;
        currentIndex = newIndex;
        modalImg.src = thumbnails[currentIndex].src;
    }
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            updateImage(index);
        });
    });
    if (upBtn) upBtn.addEventListener("click", () => updateImage(currentIndex - 1));
    if (downBtn) downBtn.addEventListener("click", () => updateImage(currentIndex + 1));

    //keyboard events
    document.addEventListener("keydown", (e) =>{
        const { code } = e;
        if (!myModal.classList.contains("show")) return;                    //will not work unless the modal is opened
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(code)) {
            e.preventDefault();
        }
        if(code == 'ArrowUp' || code == 'ArrowRight'){
            updateImage(currentIndex - 1);
        }else if(code == 'ArrowDown' || code == 'ArrowLeft'){
            updateImage(currentIndex + 1);
        }else if(code == 'Escape'){
            hideModal();
        }
    })
}

document.addEventListener("DOMContentLoaded", customModal);
