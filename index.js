const named=['Birds','Cricket','Football','Hockey','Basketball','Baseball','News','Report'];
const starts=document.getElementById("start");
const text=document.getElementById("text1");
const lose=document.getElementById("childlose");
const right1=document.getElementById("correct");
const wrong1=document.getElementById("itswrong1");
const button=document.getElementById("button");
const started=document.getElementById("started");
const childs=document.getElementById("child");
const cross=document.getElementById("cross");
starts.innerHTML=named[Math.floor(Math.random()*named.length)];
var x=40;
let count=0;
let counts=0;
cross.addEventListener("click",function(){
    childs.style.display="none";
    lose.style.display="none";

});
button.addEventListener("click",function start(){
//function start(){
    started.style.display="flex";
    started.style.top=x+"px";
    x++;
    if(x==440){
        if(count==10){
            childs.style.display="flex";
        }
        if(starts.innerText==text.value && count<11){
            //right.style.display="flex";
            let correct_text=`<div class="cricket" id="itsright">${starts.innerText}</div>`
            console.log(correct_text);
            right1.innerHTML=right1.innerHTML+correct_text;
             count=count+1;
        }
        
        else if(starts.innerText!=text.value && counts<11){
            // wrong.style.display="flex";
            if(counts==10){
                lose.style.display="flex";
            }
            if(text.value!=""){
             let wrong_text=` <div class="crickets" id="itswrong">${starts.innerText}</div>`
             console.log(wrong_text);
             wrong1.innerHTML=wrong1.innerHTML+wrong_text;
             counts=counts+1;
            //  if(counts==10){
            //     child.style.display="flex";
            // }
            }
             
        }
        
        x=40;
        starts.innerHTML=named[Math.floor(Math.random()*named.length)];


    }
    if(count<11 && counts<11){
        requestAnimationFrame(start);
    }
    //requestAnimationFrame(start);
});
//requestAnimationFrame(start);
// function show(){
//     if(counts==10){
//         child.style.display="flex";
//     }
// }
// //requestAnimationFrame(start);