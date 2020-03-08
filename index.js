import { strict } from "assert";

console.log("Hello World!");



document.querySelector("#submit")
    .addEventListener("click",function writeToChat(event){
        var message = document.querySelector("#msg").value
        var pseudo = document.querySelector("#nickname").value
        var discussionElt = document.querySelector(".discussion")
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        discussionElt.innerHTML += '<p style="color:white;">'+"<i>"+"at "+time+" | "+pseudo+" said :  "+"</i>"+message  
    })