let box1= document.getElementById("box1");
box1.addEventListener('click',function redcolor() {
    box1.style.backgroundColor ='red';
})
let box2= document.getElementById("box2");
box2.addEventListener('click',function bluecolor() {
    box2.style.backgroundColor ='blue';
})
let box3 =document.getElementById('box3');
box3.addEventListener('click',function greencolor() {
    box3.style.backgroundColor='green';
})
let box4 =document.getElementById('box4');
box4.addEventListener('click',function yellowcolor() {
    box4.style.backgroundColor='yellow';
})
let textv =document.getElementById('text');
let display=document.getElementById('display');
function text() {
   let textvalue=textv.value;
   if(textvalue!=""){
 display.innerHTML = `hello,${textvalue}`
}else{
   display.innerHTML = `hello ${textvalue}` 
}
   
}