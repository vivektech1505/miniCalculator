const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const add = document.getElementById("add")
const sub = document.getElementById("sub")
const mul = document.getElementById("mul")
const div = document.getElementById("div")
const calculator = document.getElementById("calculatorBtn")
const result = document.getElementById("result")

add.addEventListener("click",()=>{
    res = parseFloat(num1.value) + parseFloat(num2.value)
    return res
})
sub.addEventListener("click",()=>{
    res = parseFloat(num1.value) - parseFloat(num2.value)
    return res
})
mul.addEventListener("click",()=>{
    res = parseFloat(num1.value) * parseFloat(num2.value)
    return res
})
div.addEventListener("click",()=>{
    res = parseFloat(num1.value) / parseFloat(num2.value)
    return res
})
calculatorBtn.addEventListener("click",()=>{
    result.innerHTML = res;
    num1.value = "";
    num2.value = "";
})