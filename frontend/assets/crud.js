let selectdRoll = null;

//alertas
function showAlert (message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const mainT = document.querySelector(".main");
    container.insertBefore(div, mainT);

    setTimeout(() => document.querySelector(".alert").remove(), 3000)
}

// limpar
function clear () {
    document.querySelector("#nome").value = "";
    document.querySelector("#sobrenome").value = "";
    document.querySelector("#numero").value = "";
}

// add dados

document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const numero = document.querySelector("#numero").value;

    if (nome == "" || sobrenome == "" || numero == "") {
        showAlert("Por favor preencha todos os campos", "danger")
    }else {
        if(selectdRoll == null) {
            const list = document.querySelector("#Post-list");

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${nome}</td>
            <td>${sobrenome}</td>
            <td>${numero}</td>

            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Editar</a>
            <a href="#" class="btn btn-danger btn-sm delete">Deletar</a>

        `;
        list.appendChild(linha);
        selectdRoll = null;
        showAlert("Post adicionado", "success");
        }else {
            selectdRoll.children[0].textContent = nome;
            selectdRoll.children[1].textContent = sobrenome;
            selectdRoll.children[2].textContent = numero;

            selectdRoll = null;
            showAlert("Post editado", "info");
        }

        clear()
    }
});

//editar
document.querySelector("#Post-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("edit")) {
        selectdRoll = target.parentElement.parentElement;
        document.querySelector("#nome").value =  selectdRoll.children[0].textContent;
        document.querySelector("#sobrenome").value =  selectdRoll.children[1].textContent;
        document.querySelector("#numero").value =  selectdRoll.children[2].textContent;
    }
});


//deletar dados

document.querySelector("#Post-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("DADOS DELETADO", "danger");
    }
})

