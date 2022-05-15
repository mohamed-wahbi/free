var S11 = document.getElementById("S11");
var S21 = document.getElementById("S21");
var S31 = document.getElementById("S31");
var S41 = document.getElementById("S41");
var S51 = document.getElementById("S51");

   
function s11 (){S11.style.color="gold";}
function s21 (){S11.style.color="gold";S21.style.color="gold";}
function s31 (){S11.style.color="gold";S21.style.color="gold";S31.style.color="gold";}
function s41 (){S11.style.color="gold";S21.style.color="gold";S31.style.color="gold";S41.style.color="gold";}
function s51 (){S11.style.color="gold";S21.style.color="gold";S31.style.color="gold";S41.style.color="gold";S51.style.color="gold";}

var S13 = document.getElementById("S13");
var S23 = document.getElementById("S23");
var S33 = document.getElementById("S33");
var S43 = document.getElementById("S43");
var S53 = document.getElementById("S53");

function s13 (){S13.style.color="gold";}
function s23 (){S13.style.color="gold";S23.style.color="gold";}
function s33 (){S13.style.color="gold";S23.style.color="gold";S33.style.color="gold";}
function s43 (){S13.style.color="gold";S23.style.color="gold";S33.style.color="gold";S43.style.color="gold";}
function s53 (){S13.style.color="gold";S23.style.color="gold";S33.style.color="gold";S43.style.color="gold";S53.style.color="gold";}



var S12 = document.getElementById("S12");
var S22 = document.getElementById("S22");
var S32 = document.getElementById("S32");
var S42 = document.getElementById("S42");
var S52 = document.getElementById("S52");

function s12 (){S12.style.color="gold";}
function s22 (){S12.style.color="gold";S22.style.color="gold";}
function s32 (){S12.style.color="gold";S22.style.color="gold";S32.style.color="gold";}
function s42 (){S12.style.color="gold";S22.style.color="gold";S32.style.color="gold";S42.style.color="gold";}
function s52 (){S12.style.color="gold";S22.style.color="gold";S32.style.color="gold";S42.style.color="gold";S52.style.color="gold";}




var Heart1 = document.getElementById("Heart1");
var text = document.getElementById("text");
var Heart_1= document.getElementById("Heart_1");
var share1 = document.getElementById("share1");

document.getElementById("share1").addEventListener("mouseover",()=>{
    share1.style.color = "#2bd55b";
})
document.getElementById("share1").addEventListener("mouseleave",()=>{
    share1.style.color = "black";
})


document.getElementById("Heart1").addEventListener("click",()=>{
    Heart1.style.color="red";
    Heart_1.style.color="red";
    text.innerHTML=parseInt(text.innerHTML) + 1;
})    

document.getElementById("Heart_1").addEventListener("click",()=>{
    Heart1.style.color="red";
    Heart_1.style.color="red";
    text.innerHTML=parseInt(text.innerHTML) + 1; 
})


var Heart2 = document.getElementById("Heart2");
var text2 = document.getElementById("text2");
var Heart_2= document.getElementById("Heart_2");
var share2 = document.getElementById("share2");

document.getElementById("Heart_2").addEventListener("click",()=>{
    Heart2.style.color="red";
    Heart_2.style.color="red";
    text2.innerHTML=parseInt(text2.innerHTML) + 1;
})  
document.getElementById("share2").addEventListener("mouseover",()=>{
    share2.style.color = "#2bd55b";
})
document.getElementById("share2").addEventListener("mouseleave",()=>{
    share2.style.color = "black";
})


document.getElementById("Heart2").addEventListener("click",()=>{
    Heart2.style.color="red";
    Heart_2.style.color="red";
    text2.innerHTML=parseInt(text2.innerHTML) + 1;
})    

var Heart3 = document.getElementById("Heart3");
var text3 = document.getElementById("text3");
var Heart_3= document.getElementById("Heart_3");
var share3 = document.getElementById("share3");

document.getElementById("share3").addEventListener("mouseover",()=>{
    share3.style.color = "#2bd55b";
})
document.getElementById("share3").addEventListener("mouseleave",()=>{
    share3.style.color = "black";
})


document.getElementById("Heart_3").addEventListener("click",()=>{
    Heart3.style.color="red";
    Heart_3.style.color="red";
    text3.innerHTML=parseInt(text3.innerHTML) + 1;
})   

document.getElementById("Heart3").addEventListener("click",()=>{
    Heart3.style.color="red";
    Heart_3.style.color="red";
    text3.innerHTML=parseInt(text3.innerHTML) + 1;
}) 

document.getElementById("Heart1").addEventListener("mouseover",()=>{
    Heart1.style.color="red";
})
document.getElementById("Heart2").addEventListener("mouseover",()=>{
    Heart2.style.color="red";
})
document.getElementById("Heart3").addEventListener("mouseover",()=>{
    Heart3.style.color="red";
})
document.getElementById("Heart_1").addEventListener("mouseover",()=>{
    Heart_1.style.color="red";
})
document.getElementById("Heart_2").addEventListener("mouseover",()=>{
    Heart_2.style.color="red";
})
document.getElementById("Heart_3").addEventListener("mouseover",()=>{
    Heart_3.style.color="red";
})





document.getElementById("Heart1").addEventListener("mouseleave",()=>{
    Heart1.style.color="black";
})
document.getElementById("Heart2").addEventListener("mouseleave",()=>{
    Heart2.style.color="black";
})
document.getElementById("Heart3").addEventListener("mouseleave",()=>{
    Heart3.style.color="black";
})
document.getElementById("Heart_1").addEventListener("mouseleave",()=>{
    Heart_1.style.color="black";
})
document.getElementById("Heart_2").addEventListener("mouseleave",()=>{
    Heart_2.style.color="black";
})
document.getElementById("Heart_3").addEventListener("mouseleave",()=>{
    Heart_3.style.color="black";
})
var ABC = document.getElementById("ABC");
var PlatsCards = document.getElementById("plats-cards")
var mohtawa = document.getElementById("mohtawa");
if(screen.width<=1030){
    PlatsCards.style.display="none";
  mohtawa.style.display="flex";
  mohtawa.style.justifyContent="center";
  mohtawa.style.alignItems="center";
  ABC.style.background="#cab02233 !important";
 }





 var col0 = document.getElementById("col0");
 if(screen.width<=881){
    col0.style.background="#967fff29";
    col0.style.width=540;
    col0.style.margin=0;
    col0.style.padding=8;



 }



 



 







