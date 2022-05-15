var ulList1 = document.getElementById("ulList1");
var FRlist1 = document.getElementById("FRlist1");
var FDlist1 = document.getElementById("FDlist1");
var list1 = document.getElementById("list1").
list1.addEventListener("mouseover",()=>{
    ulList1.style.display="grid"
    FRlist1.style.display="none"
    FDlist1.style.display="flex"
})
document.getElementById("list1").addEventListener("mouseleave",()=>{
    ulList1.style.display="none"
    FRlist1.style.display="flex"
    FDlist1.style.display="none"


})

var ulList2 = document.getElementById("ulList2");
var FRlist2 = document.getElementById("FRlist2");
var FDlist2 = document.getElementById("FDlist2");

document.getElementById("list2").addEventListener("mouseover",()=>{
    ulList2.style.display="grid"
    FRlist2.style.display="none"
    FDlist2.style.display="flex"
})
document.getElementById("list2").addEventListener("mouseleave",()=>{
    ulList2.style.display="none"
    FRlist2.style.display="flex"
    FDlist2.style.display="none"


})



var ulList3 = document.getElementById("ulList3");
var FRlist3 = document.getElementById("FRlist3");
var FDlist3 = document.getElementById("FDlist3");

document.getElementById("list3").addEventListener("mouseover",()=>{
    ulList3.style.display="grid"
    FRlist3.style.display="none"
    FDlist3.style.display="flex"
})
document.getElementById("list3").addEventListener("mouseleave",()=>{
    ulList3.style.display="none"
    FRlist3.style.display="flex"
    FDlist3.style.display="none"


})

const slider =document.querySelector("input");
const value =document.querySelector(".value");
 value.textContent =slider.value;
 slider.oninput= function(){
    value.textContent =this.value;
}



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value;
}











