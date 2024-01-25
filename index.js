
let main = document.querySelector('.main')
let form = document.querySelector(".form");
let img = document.querySelector(".img-container");
let success = document.querySelector(".success-container");

let emailInput = document.getElementById("email");

let sub = document.querySelector(".submit-btn");
let dismiss = document.querySelector(".dismiss-btn");
let text = document.querySelector(".email-text");

let regx = /[a-zA-Z0-9._+]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]{0,}/g;

sub.addEventListener('click', e =>  {
    e.preventDefault()
    resetColors();
    let email = emailInput.value;
    let pattern = new RegExp(regx);
    let width = window.innerWidth

    if(pattern.test(email)){
        main.classList.toggle('active-main')
        success.classList.toggle('active')
        text.innerText = email.trim();
        form.style.display = "none";
        img.style.display = "none";
    }
    else {
        emailInput.style.borderColor = "red"
        emailInput.style.background = "hsl(0, 44%, 84%)"
        emailInput.style.color = "red"
        document.querySelector(".error-label").style.display = "block";
    }
})

dismiss.addEventListener('click', e => {
    main.classList.toggle('active-main')
    form.style.display = "block";
    img.style.display = "block";
    success.style.display = "none";
    emailInput.value = "";
})

function resetColors(){
    emailInput.style.borderColor = "hsl(231, 7%, 60%)";
    emailInput.style.background = "#fff";
    emailInput.style.color = "hsl(234, 29%, 20%)";

    document.querySelector(".error-label").style.display = "none";
}