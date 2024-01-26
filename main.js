
   let number1=Number(prompt("Reqem daxil edin"))
   
   
   let number2=Number(prompt("Reqem daxil edin"))
   




const plus=document.querySelector(".plus")
const subtraction=document.querySelector(".subtraction")
const multiplication=document.querySelector(".multiplication")
const division=document.querySelector(".division")
const answer=document.querySelector(".answer-data")


answer.addEventListener("click",function(){

})

plus.addEventListener("click", function(){
    console.log(number1,number2)
    let result = number1 + number2;
    answer.innerHTML = result;
    console.log("🚀 ~ addition.addEventListener ~ result:", result) 
})

subtraction.addEventListener("click", function(){
    console.log(number1,number2)
    let result = number1 - number2;
    answer.innerHTML = result;
    console.log("🚀 ~ addition.addEventListener ~ result:", result) 
})

multiplication.addEventListener("click", function(){
    console.log(number1,number2)
    let result = number1 * number2;
    answer.innerHTML = result;
    console.log("🚀 ~ addition.addEventListener ~ result:", result) 
})

division.addEventListener("click", function(){
    console.log(number1,number2)
    let result = number1 / number2;
    answer.innerHTML = result;
    console.log("🚀 ~ addition.addEventListener ~ result:", result) 
})
