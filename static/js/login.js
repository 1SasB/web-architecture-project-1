const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });
// console.log("im in js file")
// function onChange() {
//       const password = document.querySelector('input[name=password1]');
//       const confirm = document.querySelector('input[name=password2]');
//       if (confirm.value === password.value) {
//         confirm.setCustomValidity('');
//       } else {
//         confirm.setCustomValidity('Passwords do not match');
//       }
// }