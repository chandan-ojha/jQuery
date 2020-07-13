 //text change Using Jvascript
 /*
document.querySelector("button").addEventListener("click",function(){
    document.querySelector("h1").innerHTML="you have clicked the button";

});
*/

 //text change Using Jquery
/*
 $("button").click(function(){
     $("h1").text("you have clicked the button");
 })
*/

 //style add using Jquery
 /*
 $("button").click(function(){
    $("h1").toggleClass("style1");
})
*/


     //muliple event listener by javaScript
/*
var totalButtons=document.querySelectorAll(".myButton").length;
for(var i=0; i<totalButtons;i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
    var text=this.innerHTML;
    document.querySelector("h1").innerHTML=text+" is clicked";
    });
}
*/



  //muliple event listener by jquery
/*
$(".myButton").click (function(){
var value=this.innerHTML;
$("h1").text(value+" is clicked");
});
*/

$(".myButton").on("mouseover",function(){
    var value=this.innerHTML;
    $("h1").text(value+" is clicked");
});

