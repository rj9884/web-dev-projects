const signupBtn = document.querySelector(".signup");
const signinBtn = document.querySelector(".signin");
const h2 = document.querySelector("h2");
const underline = document.querySelector(".underline");
const nameField = document.querySelector("#nameField");
const text = document.querySelector(".text");

signinBtn.addEventListener("click",()=>{
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    nameField.style.maxHeight = '0';
    underline.style.transform = "translateX(25px)";
    h2.innerHTML = "Sign In";
    text.innerHTML = "Lost Password?";
});

signupBtn.addEventListener("click",()=>{
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
    nameField.style.maxHeight = '60px';
    underline.style.transform = "translateX(0)";
    h2.innerHTML = "Sign Up";
    text.innerHTML = "Password Suggestions";
});

    
