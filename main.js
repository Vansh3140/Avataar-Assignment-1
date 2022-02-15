const selected=document.querySelector(".selected");
const optionsContainer=document.querySelector(".options-container");

const optionslist=document.querySelectorAll(".option");

selected.addEventListener("click", ()=>{
    optionsContainer.classList.toggle("active");
});

optionslist.forEach( o=>{
    o.addEventListener("click", ()=>{
        selected.innerHTML=o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});

/*Code for 2nd button*/

const selected2=document.querySelector(".selected2");
const optionsContainer2=document.querySelector(".options-container2");

const optionslist2=document.querySelectorAll(".option2");

selected2.addEventListener("click", ()=>{
    optionsContainer2.classList.toggle("active2");
});

optionslist2.forEach( o=>{
    o.addEventListener("click", ()=>{
        selected2.innerHTML=o.querySelector("label").innerHTML;
        optionsContainer2.classList.remove("active2");
    });
});

/*Code for 3rd button */

const selected3=document.querySelector(".selected3");
const optionsContainer3=document.querySelector(".options-container3");

const optionslist3=document.querySelectorAll(".option3");

selected3.addEventListener("click", ()=>{
    optionsContainer3.classList.toggle("active3");
});

optionslist3.forEach( o=>{
    o.addEventListener("click", ()=>{
        selected3.innerHTML=o.querySelector("label").innerHTML;
        optionsContainer3.classList.remove("active3");
    });
});