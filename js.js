const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.img')
const bottom = document.querySelector('.bottom')
let slideNumber = 1;
const length =  images.length
//button color//
for (let i = 0 ; i< length; i++){
   const div = document.createElement('div')
   div.className= 'button' 
   bottom.appendChild(div)
}
const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = 'black'
const resetBg = ()=>{
    buttons.forEach((button)=>{
        button.style.backgroundColor = 'transparent'
    })
}


buttons.forEach((button,i) =>{
    button.addEventListener('click',()=>{
        resetBg()
        slider.style.transform = `translateX(-${i * 400}px)` 
        slideNumber = i + 1
        button.style.backgroundColor = 'black'
    })
     
})
//button color slider//
const nextSlider = ()=>{
    slider.style.transform = `translateX(-${slideNumber * 400}px)`
    slideNumber ++
}
const pevSlider = ()=>{
    slider.style.transform = `translateX(0px)`
    slideNumber = 1 
}

right.addEventListener('click', ()=>{
    slideNumber < length ? nextSlider()  : pevSlider()  
    resetBg() 
    buttons[slideNumber -1].style.backgroundColor = 'black' 
 }) 

 left.addEventListener('click', ()=>{
    if(slideNumber > 1){
        slider.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`
        slideNumber --
    }else{
        slider.style.transform = `translateX(0px)`
     slideNumber = 1 
    } 
    resetBg() 
    buttons[slideNumber -1].style.backgroundColor = 'black' 
 })