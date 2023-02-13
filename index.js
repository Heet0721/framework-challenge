
const loginText = document.querySelector(".title-text .login");
       const loginForm = document.querySelector("form.login");
       const loginBtn = document.querySelector("label.login");
       const registerBtn = document.querySelector("label.register");
       const registerLink = document.querySelector("form .register-link a");
       const loginLink = document.querySelector("form .login-link a");
       registerBtn.onclick = (()=>{
         loginForm.style.marginLeft = "-50%";
         loginText.style.marginLeft = "-50%";
       });
       loginBtn.onclick = (()=>{
         loginForm.style.marginLeft = "0%";
         loginText.style.marginLeft = "0%";
       });
       registerLink.onclick = (()=>{
        registerBtn.click();
         return false;
       });
       loginLink.onclick = (()=>{
         loginBtn.click();
         return false;
       });

