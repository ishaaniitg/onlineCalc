let nums = document.querySelectorAll(".nums");
let screen=document.querySelector(".screen");
let equals = document.querySelector(".equals");
let add= document.querySelector(".add");
let sub =document.querySelector(".sub");
let multip =document.querySelector(".multip");
let divsn =document.querySelector(".divsn");
let point=document.querySelector(".point");
let AC = document.querySelector(".AC");
let DEL = document.querySelector(".DEL");
let percg = document.querySelector(".percg");
let n00 = document.querySelector(".n00");
let string ="";
nums.forEach((num) => {
    num.addEventListener("click",()=>{
        string+=num.getAttribute("id");
        screen.innerText=string;
    });
});
equals.addEventListener("click",()=>{
    let num = eval(string)
    string=num.toString();
    screen.innerText=string;
    screen.style.fontSize="35px";
})

AC.addEventListener("click",()=>{
    string="";
    screen.innerText=string;
    screen.style.fontSize="35px";
})
DEL.addEventListener("click",()=>{
    string=string.slice(0,string.length-1);
    screen.innerText=string;
    console.log(l);
})

percg.addEventListener("click",()=>{
    string+="%";
    screen.innerText=string;
    console.log(l);
})
n00.addEventListener("click",()=>{
    string+="00";
    screen.innerText=string;
    console.log(l);
})
add.addEventListener("click",()=>{
    string+="+";
    screen.innerText=string;
    console.log(l);
})
sub.addEventListener("click",()=>{
    string+="-";
    screen.innerText=string;
    console.log(l);
})
multip.addEventListener("click",()=>{
    string+="*";
    screen.innerText=string;
    console.log(l);
})
divsn.addEventListener("click",()=>{
    string+="/";
    screen.innerText=string;
    console.log(l);
})
point.addEventListener("click",()=>{
    string+=".";
    screen.innerText=string;
    console.log(l);
})
