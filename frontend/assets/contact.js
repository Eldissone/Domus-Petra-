document.querySelector(".logo").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("index.html");
    console.log("estou na index")

})


//alertas
function showAlert (message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".Content-contact");
    const Form = document.querySelector("form");
    container.insertBefore(div, Form);

    setTimeout(() => document.querySelector(".alert").remove(), 1000)
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const telefone = document.querySelector("#Telefone").value;
    const mensagem = document.querySelector("#txt-msg").value;


    if (nome === "" || email === "" || telefone ==="" || mensagem === "" ) {
        showAlert("Por favor preencha todos os campos", "danger");
    }
    
})

document.querySelector("[data_IconWatsaap]").addEventListener("click", function () {
    location.href = "https://wa.me/+554797071177"

})
document.querySelector("[data_IconInsta]").addEventListener("click", function () {
    location.href = "https://www.instagram.com/fabianodellagnolo/"
})

document.querySelector("[data_IconLinkedin]").addEventListener("click", function () {
    location.href = "https://www.linkedin.com/in/fabianodellagnolo/"
  
})
document.querySelector("[data_IconFacebook]").addEventListener("click", function () {
    location.href = "https://www.facebook.com/fabiano.dellagnolo"

})
document.querySelector("[data_IconYoutube]").addEventListener("click", function () {
    location.href = "https://www.youtube.com/@FabianoDellAgnolo"
})