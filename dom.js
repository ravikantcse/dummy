// let demo=document.querySelector(".ram");
// demo.style.color="red"
// demo.style.backgroundColor="black"
// demo.innerText="jai shri ram";
// console.log(demo);


// let list=document.querySelectorAll("li")
// console.log(list);



// let head=document.createElement("h1");
// head.innerText="i am heading1 content";
// head.setAttribute("class","c1");
// console.log(head.innerText);
// console.log(head);
// document.body.appendChild(head)
// document.body.removeChild(head)




// let button=document.getElementById("but");
//  let fun=()=>{
//     document.body.style.backgroundColor="red";
//  }


// button.addEventListener("click",fun);
// let fun1=()=>{
//     document.body.style.backgroundColor="white";
//  }
//  button.addEventListener("dblclick",fun1);


let heading= document.getElementById("head");

let fun=()=>{
    document.body.style.backgroundColor="purple";
}
heading.addEventListener("keydown" , fun);
