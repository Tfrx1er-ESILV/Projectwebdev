import { strict } from "assert";
import axios from 'axios' 




axios.get('/api/version');



document.querySelector("#submit")
    .addEventListener("click",function writeToChat(event){
        var message = document.querySelector("#msg").value
        var pseudo = document.querySelector("#nickname").value
        var discussionElt = document.querySelector(".discussion")
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        
        if(pseudo != '')
        {
        discussionElt.innerHTML += '<p style="color:white;float:left;width=100%;">'+'<i style="color:grey">'+"at "+time+" | "+pseudo+" said :  "+"</i>"+message+"</p>"
        discussionElt.innerHTML += '<p style="color:white;float:right;width=100%;">'+'<i style="color:grey">'+"at "+time+" | "+"Chat_bot"+" said :  "+"</i>"+"This is an automatic response"+"</p>"
        }
        else{
        discussionElt.innerHTML += '<p style="color:white;float:right;width=100%;">'+'<i style="color:grey">'+"at "+time+" | "+"Chat bot"+" said :  "+"</i>"+"You can't post without pseudo"+"</p>"
        }
    })