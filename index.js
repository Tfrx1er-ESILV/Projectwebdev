import { strict } from "assert";

console.log("Hello World!");
document.querySelector("#submit")
    .addEventListener("click",function writeToChat(event){
        var message = document.querySelector("#msg").value
        var discussionElt = document.querySelector(".discussion")
        discussionElt.innerHTML += "<p>"+message  
    })