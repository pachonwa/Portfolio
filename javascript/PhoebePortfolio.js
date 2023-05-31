document.addEventListener('DOMContentLoaded', type);
let nameToType = 'Phoebe Achonwa :)';
let ind = 0;
function type() {
    if(ind < nameToType.length){
        document.querySelector('.typing').innerHTML += nameToType.charAt(ind);
        ind++;
        setTimeout(type, 250);
    }
};

// Fade in / Blur animation on scroll
let observerFade = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else{
            entry.target.classList.remove("show");
        }
    });
}, {rootMargin: '0px', threshold:0.3});
let hiddenDivs = document.querySelectorAll(".hidden");
hiddenDivs.forEach((el) => observerFade.observe(el));

// About page tabbing
let tabs = document.getElementsByClassName("tabName");
let tabContents = document.getElementsByClassName("tab-content");
for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener("click", ()=>{
        tabs[i].classList.add("active-link");
        tabContents[i].style.display = 'block';

        for(let j = 0; j < tabs.length; j++){
            if(tabs[j] != tabs[i]) {
                tabs[j].classList.remove("active-link"); 
                tabContents[j].style.display = 'none';
            }
        }
    })
}
