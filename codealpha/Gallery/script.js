let images =
Array.from(document.querySelectorAll(".gallery img"));

let currentIndex = 0;

function openLightbox(src){

    document.getElementById("lightbox").style.display="flex";

    document.getElementById("lightbox-img").src = src;

    currentIndex = images.findIndex(
        img => img.src === src
    );
}

function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}

function changeImage(direction){

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src =
    images[currentIndex].src;
}

function filterImages(category){

    let items =
    document.querySelectorAll(".image");

    items.forEach(item => {

        if(category === "all"){
            item.style.display="block";
        }
        else if(item.classList.contains(category)){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }

    });
}