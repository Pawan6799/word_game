const named=['Birds','Cricket','Football','Hockey','Basketball','Baseball','News','Report'];
const starts=document.getElementById("start");
const text=document.getElementById("text1");
//const search=document.getElementById("search1");
const right1=document.getElementById("correct");
const wrong1=document.getElementById("itswrong1");
const button=document.getElementById("button");
const started=document.getElementById("started");
starts.innerHTML=named[Math.floor(Math.random()*named.length)];
var x=50;
let count=0;
let counts=0;
button.addEventListener("click",function start(){
//function start(){
    started.style.display="flex";
    started.style.top=x+"px";
    x++;
    if(x==438){
        if(starts.innerText==text.value && count<11){
            //right.style.display="flex";
            let correct_text=`<div class="cricket" id="itsright">${starts.innerText}</div>`
            console.log(correct_text);
            right1.innerHTML=right1.innerHTML+correct_text;
             count=count+1;
        }
        
        else if(starts.innerText!=text.value && counts<11){
            // wrong.style.display="flex";
            if(text.value!=""){
             let wrong_text=` <div class="crickets" id="itswrong">${starts.innerText}</div>`
             console.log(wrong_text);
             wrong1.innerHTML=wrong1.innerHTML+wrong_text;
             counts=counts+1;
            }
             
        }
        
        x=50;
        starts.innerHTML=named[Math.floor(Math.random()*named.length)];

    }
   
    requestAnimationFrame(start);
});
requestAnimationFrame(start);