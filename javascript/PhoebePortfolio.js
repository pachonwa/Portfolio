
document.addEventListener("DOMContentLoaded", function() {
    txt = '';
    wordIndex = 0;
    txtElement = document.querySelector('.typing').innerHTML;
});


function isInViewPort(elem){
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= window.innerWidth &&
        bounding.bottom <= window.innerHeight
    )
};

document.addEventListener('DOMContentLoaded', type);

function type() {
    txt = txtElement.slice(0, ++wordIndex);
    
    document.querySelector('.typing').textContent = txt;
    setTimeout(type, 200);
};