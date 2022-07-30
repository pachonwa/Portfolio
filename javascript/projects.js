console.log('Hello World');

//using queryselectorall to reference all the slide images
let image = document.querySelectorAll('.slide');
let previousArrow = document.querySelector('.previous');
let nextArrow = document.querySelector('.next');
let currentIndex = 0;
let actualImage = document.getElementsByClassName('.slide');

//resetting the slideshow
function resetSlideshow() {
    for (let i = 0; i < image.length; i++){
        image[i].style.display = "none";
    }
}

//starting the slideshow
function showFirstImage(){
    resetSlideshow();
    image[0].style.display = "block";
}

//Showing the previous slide
function previousImage(){
    resetSlideshow();
    // image[i].style.display = "none";
    image[currentIndex - 1].style.display = "block";
    currentIndex--;
}
//Showing the next image
function nextImage(){
    resetSlideshow();
    image[currentIndex + 1].style.display = "block";
    currentIndex++;
}

//EVENT LISTENERS
//clicking previous arrow
previousArrow.addEventListener('click', function(){
    if (currentIndex == 0){   //
        currentIndex = image.length;
    }
    previousImage();
})

nextArrow.addEventListener('click', function(){
    if (currentIndex == image.length - 1){
        currentIndex = -1;
    }
    nextImage();
})

showFirstImage();