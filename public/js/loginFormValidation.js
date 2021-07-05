// Retrieving the values of form elements 
document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.querySelector("#loginForm")
    const email = document.querySelector("#email")
    const pwd = document.querySelector("#password")
    loginForm.onsubmit = (e) => { 
      //  console.log("Login form validation")
        if (validateEmail(email) && validatePwd(pwd)) {
             console.log("Form validation is successful")
            }
        else {
            console.log("Error while validating the form.")
            e.preventDefault()
        }
     }   

    function validateEmail (email) {
        const emailRegExp = /^[a-zA-Z0-9_.-]+[a-zA-Z0-9_.-]+@+[a-z]{3,5}.+[a-z]{2,4}/g;
        if(!(emailRegExp.test(email.value.toLocaleLowerCase()))) {
            printError("emailErr", "Please enter a valid email address");
            return false;
        } else {
            printError("emailErr", "");
            return true;
        }       
    }

    function validatePwd(pwd) {
        const pwdRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/gm;
        if(pwd.value.length < 1 ) {
            printError("pwdErr", "Please enter the password");
            return false;
        } 
        else if (!(pwdRegExp.test(pwd.value))) { 
            printError("pwdErr", "Password is incorrect");
            return false;
        } else {
            printError("pwdErr", "");
            return true;
        }    
    }
  
     // Defining a function to display error message
    function printError(elemId, hintMsg) {
         document.getElementById(elemId).innerHTML = hintMsg;
    }      
})
