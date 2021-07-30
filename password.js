//password.js

let greetingHello = { greeting: 'Hey!' };

greetingHello.greeting = 'Hello, welcome to Password Validator';
console.log(greetingHello.greeting);

function checkPassword() {  
    let pw = document.getElementById("password").innerHTML;   
    if(pw === "") {  
       document.getElementById("message").innerHTML = "Please validate your Password";  
       return false;  
    }    
    console.log(document.getElementById)
    if(pw.length < 10) {  
       document.getElementById("message").innerHTML = "Password needs to be at least 10 characters";  
       return false;  
    } 
     else {  
       alert("Success! Password is correct.");  
    }  alert ("Failure, password is incorrect.")
       return false;
}

