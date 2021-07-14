let registration=document.querySelector(".registration")
// let click=document.querySelector(".click")
let request=document.querySelectorAll(".request")
let x=document.querySelector(".x")

 x.addEventListener("click",()=>{
    registration.style.display="none"
})
for (let i=0;i<request.length;i++){
   request[i].addEventListener("click",()=>{
      registration.style.display="block"
   })
}


