const menuButton = document.querySelector('.menu-butt i');
const menuButtonClose = document.querySelector('.top-menu .fa-close');


function dropMenu(){
    var findMenu = document.querySelector('.top-menu');
    

         findMenu.classList.add("grow");
}
function dropMenuClose(){
    var findMenu = document.querySelector('.top-menu');
    

         findMenu.classList.remove("grow");
}

menuButton.addEventListener('click', dropMenu);


menuButtonClose.addEventListener('click', dropMenuClose);

var findSlides = document.querySelectorAll('.slide');

var slideCount = findSlides.length;



function moveSlides(){
        
    console.log(findSlides[0]);
    
    if(findSlides[0].classList.contains('active') == true){
        
        findSlides[0].classList.remove('active');
        findSlides[1].classList.add('active');
        
    }
    else if(findSlides[1].classList.contains('active') == true){
        findSlides[1].classList.remove('active');
        findSlides[2].classList.add('active'); 
    }
    else if(findSlides[2].classList.contains('active') == true){
        findSlides[2].classList.remove('active');
        findSlides[3].classList.add('active'); 
    }
    else{
        findSlides[3].classList.remove('active');
        findSlides[0].classList.add('active');         
    }
    

    
     
}

setInterval(moveSlides, 6500);

/*
findSlides.forEach(slide => {
    
    console.log(slide.classList.length);
} );
*/
