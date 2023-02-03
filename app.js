
const btn = document.querySelector(".btn");

const cont = document.querySelector(".container");

// btn.addEventListener("click" , ()=>{
// btn.classList.toggle("btnNight");
// cont.classList.toggle("containerNight");

// })

btn.addEventListener("click" , ()=>{
    if(btn.className == "btn"){
    btn.className = "btnNight";
    cont.className = "containerNight"
}else{
    btn.className = "btn"
    cont.className = "container"
}
})






























//  const div = document.getElementsByClassName("tit")[0]
// console.log(div);

// const div1 = document.querySelector(".ti");

// console.log(div1);

// const div = document.createElement("div");
// div.innerText = "Hello World";
// div.className = "div1"
// div.id = "dev"

// document.body.appendChild(div)
// console.log(div);

// const ul = document.createElement("ul")
// document.body.appendChild(ul)
// console.log(ul);

// const li = document.createElement("li")
// li.innerText = "Hello"
// ul.appendChild(li)


// const li1 = document.querySelector("li")

// console.log(li1.children);


// console.log(div.getAttribute("style"));

// console.log(div.setAttribute("style" , "background-color: blue;"));


// const div = document.querySelector(".ti");
// let count = document.querySelector(".count");
// const btn = document.querySelector("button");
//  let Newcount = 0;

// btn.addEventListener("click" , ()=>{
//     Newcount+= 1;
//     div.style.background = "blue";
// count.innerHTML = Newcount;

// if(div.getAttribute("style") === "background-color: brown;"){

// }

// });



































