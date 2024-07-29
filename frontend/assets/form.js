//alertas
function showAlert (message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".sec-form");
    const Form = document.querySelector("form");
    container.insertBefore(div, Form);

}
function showAlertSucess (message, className) {
    const div = document.createElement("div");
    div.className = `success alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".sec-form");
    const Form = document.querySelector("form");
    container.insertBefore(div, Form);

}



document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const mensagem = document.querySelector("#txt-msg").value;

    if (nome === "" || email === "" || mensagem === "" ) {
        showAlert("Por favor preencha todos os campos");
        setTimeout(() => document.querySelector(".alert").remove(), 1000)

    }

    else {
        showAlertSucess("Enviando");
        // alert("enviar form")
        setTimeout(() => document.querySelector(".success").remove(), 1000)

    }
    
})