
// function animateText(){
//     document.getElementById("textAnimate").className = "animateFromBottom";
// }


function isInViewPort(elem){
    // element = document.querySelector(elem);
    var bounding = elem.getBoundingClientRect();
    // console.log(bounding)
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= window.innerWidth &&
        bounding.bottom <= window.innerHeight
    )
};


window.addEventListener("scroll", function(event) {
    element = document.querySelector("#textAnimate");
    // var bounding = element.getBoundingClientRect();
    // console.log(bounding)
    if(isInViewPort(element)){
        document.getElementById("textAnimate").className = "animateFromBottom";
        // this.alert("heeeeeey");
    }
});

window.addEventListener("scroll", function(event) {
    element = document.querySelector("#textAnimate1");
    // var bounding = element.getBoundingClientRect();
    // console.log(bounding)
    if(isInViewPort(element)){
        document.getElementById("textAnimate1").className = "animateFromBottom";
        // this.alert("heeeeeey");
    }
});

window.addEventListener("scroll", e=> {
    element = document.querySelector("#textAnimate");
    var bounding = element.getBoundingClientRect();

    if (bounding.top <= 787){
        document.getElementById("navbar").style.transition = "background-color 0.2s ease";
        // document.getElementById("navbar").style.backgroundColor = "#101113";
        document.getElementById("navbar").style.backgroundColor = "black";
    }
    else if (bounding.top >= 788){
        document.getElementById("navbar").style.transition = "background-color 0.2s ease";
        document.getElementById("navbar").style.backgroundColor = "transparent";
    }
});