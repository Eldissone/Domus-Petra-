let login = document.querySelector("#login");
let logar = document.querySelector(".logar");
let Submit = document.querySelector("#submit");


login.addEventListener("click", () => {
    console.log("clicou no login");
    logar.classList.toggle("active");
} )

Submit.onclick = () => {
    if (passwordTypedQuickly) {
        Error('Wrong password')
    }
}