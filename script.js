let color1=document.getElementsByTagName('input')
let gradient=document.querySelector('.gradient')
let h3=document.querySelector('h3')
let raButton=document.getElementsByTagName('button')[0]

color1[0].addEventListener('input',changeBgColorByInput)
color1[1].addEventListener('input',changeBgColorByInput)
window.addEventListener('load', changeBgColorByInput) 
raButton.addEventListener('click',randomBgColor)

function changeBgColorByInput(){
    gradient.style.background=
    'linear-gradient(to right,'+color1[0].value+', '+color1[1].value+')';
    h3.innerText=gradient.style.background
}

function randomBgColor(){
    let ranNum0=String(Math.floor(Math.random()*100)).padStart(2,0)
    let ranNum1=String(Math.floor(Math.random()*100)).padStart(2,0)
    let ranNum2=String(Math.floor(Math.random()*100)).padStart(2,0)
    let ranNum3=String(Math.floor(Math.random()*100)).padStart(2,0)
    let ranNum4=String(Math.floor(Math.random()*100)).padStart(2,0)
    let ranNum5=String(Math.floor(Math.random()*100)).padStart(2,0)
    color1[0].value=`#${ranNum0}${ranNum1}${ranNum2}`
    color1[1].value=`#${ranNum3}${ranNum4}${ranNum5}`
    changeBgColorByInput()
}
