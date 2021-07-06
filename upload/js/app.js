

const hamburger = document.querySelector('.header_hamburger');

const header = document.querySelector('.header');

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle('open');
    header.classList.toggle('active');

})

const darkmode = document.querySelector('.dark-mode');


darkmode.addEventListener('click',validate);


function validate(){

    if(darkmode.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }else {
        
        document.documentElement.setAttribute('data-theme','');
    }
    
    }


    validate();



    // testimonial

    const infos = document.querySelectorAll(".testimonials-container_content");
    const images = document.querySelectorAll(".testimonials-container_images_content");


    images.forEach(function(img){
    img.addEventListener('click', function(){    
        
        images.forEach(function(image){
            image.classList.remove('active-i');
        })
        this.classList.add('active-i');
        const i= this.getAttribute('data-id');
        infos.forEach(function(info){
            info.classList.remove('active-t');
        })

        infos[i].classList.add('active-t');
    })

});


// register

const con= document.querySelector('.register-container_form')
const pages= document.querySelectorAll('.register-container_form--content');


const setPos= ()=> {
        const width= con.getBoundingClientRect().width;
        console.log(width)
        pages.forEach(function(page,i){
            page.style.left= (width * i) + "px";
        })
}

setPos();

const next = document.querySelectorAll('.next');
const previous= document.querySelectorAll(".previous");
const submit= document.getElementById("submit");



const nums= document.querySelectorAll('.register-container_nums--content');

const finish = ()=>{
    nums.forEach(function(num){
        num.classList.remove('finish');

    });

   


}

submit.addEventListener('click',function(){
    const index= Number(this.getAttribute('data-id'))+ 1 ;
        
    finish();
    
    for (let i = 0; i < index; i++) {
        nums[i].classList.add('finish');
      } 

      setTimeout("alert('Your form has been submitted successfully\ Thank you for supporting us!')", 1000); 
});

next.forEach(function(n){
    n.addEventListener('click',function(){
        pages.forEach(function(page){
            const width= con.getBoundingClientRect().width;
            const left= Number((page.style.left).split('px')[0]);
            const newLeft = (left - width) +"px";

            page.style.left= newLeft;
        });

        const index= Number(this.getAttribute('data-id'))+ 1 ;
        
        finish();
      
        for (let i = 0; i < index; i++) {
            nums[i].classList.add('finish');
          } 

        

    })
})

previous.forEach(function(p){
    p.addEventListener('click',function(){
        pages.forEach(function(page){
            const width= con.getBoundingClientRect().width;
            const left= Number((page.style.left).split('px')[0]);
            const newLeft = (left + width) +"px";

            page.style.left= newLeft;

            
        })

        const index= Number(this.getAttribute('data-id')) ;
        
        finish();
        
        if(index!=0){
            for (let i = 0; i < index-1; i++) {
                nums[i].classList.add('finish');
              } 
        }

      
        
    })
})

const form = document.querySelector('.register-container_form')


form.addEventListener('submit',function(e){
    
    e.preventDefault();
    e.stopPropagation();
    setTimeout(function () {
        
        form.reset();
       location.reload(); 
       }, 2000);
       
})



// scroll

const scroll = document.querySelector(".scroll");

window.addEventListener('scroll',function(){
    const h = document.documentElement.clientHeight *0.5;
   if(window.scrollY > h){
    scroll.classList.remove('inactive-scroll');
       scroll.classList.add('active-scroll');
   }else{
        scroll.classList.remove('active-scroll');
        scroll.classList.add('inactive-scroll');
    
   }
   
})

