
var topMenu = document.querySelectorAll('div.main-menu');
// console.log(topMenu[0]);

var addClasses = function(list){
        for( let item of list ){
            item.classList.toggle("show-subitem");
        }
}

topMenu[0].addEventListener('mouseover', function(e){
    var subList = e.target.children[0].children;
    addClasses(subList);
});

// Random Number Generator

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


// Random event listeners
var allImages = document.querySelector("#getThis");
var body = document.querySelector('body');


function playground(e){

    if(e.target.classList[1].includes('image01')){
        if(e.target.style.cssText.includes('transform: rotate(20deg)')){
        e.target.style.cssText = "transform: rotate(-20deg)";
        } else {
            e.target.style.cssText = "transform: rotate(20deg)";

        }
    }
    if(e.target.classList[1].includes('image02') ||
    e.target.classList[1].includes('image19') ||
    e.target.classList[1].includes('image24')
    ){
    if(e.target.style.cssText.includes('transform: rotateY(180deg);')){
        e.target.style.cssText = "transform: rotateY(-180deg); transition: transform 0.8s; transform-style: preserve-3d;;"
    } else {
        e.target.style.cssText = "transform: rotateY(180deg); transition: transform 0.8s; transform-style: preserve-3d;";

    }
    }
    

}

function scrollFun(e){
    body.style.backgroundColor = "green";
}


allImages.addEventListener('click', playground);
allImages.addEventListener('mousemove', scrollFun);

    
    





