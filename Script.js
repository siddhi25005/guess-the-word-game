let items=["apple","banana","mango"];
let text=document.querySelector(".text");
let button=document.querySelector("button");
let p=document.querySelector("p");
let h1=document.querySelector("h1");
let random=items[Math.floor(Math.random()*items.length)];
p.innerText=`Hint:Word Start With ${random[0]} and ends with ${random[random.length-1]}(${random.length}letters)`
button.addEventListener("click",()=>{
    let userguess=text.value.toLowerCase();
    if(userguess===random){
        h1.innerText="U Guessed Correct";
        h1.style.color="green";
    }
    else {
        h1.innerText="Opps...Try again";
        h1.style.color="red";
    }
})
