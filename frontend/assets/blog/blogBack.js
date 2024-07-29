let selectedRow = null;

//alertas
function showAlert (message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const mainT = document.querySelector(".main");
    container.insertBefore(div, mainT);

    setTimeout(() => document.querySelector(".alert").remove(), 5000)
}

// limpar campus
function clear () {
    document.querySelector("#tituloC").value = "";
    document.querySelector("#subtitulo").value = "";
    document.querySelector("#txtArea").value = "";
    document.querySelector("#fileImg").value = "";
}

// add dados
document.querySelector("#formBlog").addEventListener("submit", (e) => {
    e.preventDefault();

    const tituloC = document.querySelector("#tituloC").value;
    const subtitulo = document.querySelector("#subtitulo").value;
    const conteudo = document.querySelector("#txtArea").value;
    const fileInput = document.getElementById("fileImg");

    if (tituloC === "" || subtitulo === "" || conteudo === "" || fileInput.files.length === 0) {
        showAlert("Por favor preencha todos os campos", "danger");
    }
    
    else {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgSrc = e.target.result;

            if (selectedRow === null) {
                const list = document.querySelector("#Post-list");
                const linha = document.createElement("tr");

                linha.innerHTML = `
                    <td>${tituloC}</td>
                    <td>${subtitulo}</td>
                    <td>${conteudo}</td>
                    <td><img src="${imgSrc}" alt="Imagem selecionada"></td>
                    <td>
                        <a href="#" class="btn btn-warning btn-sm edit">Editar</a>
                        <a href="#" class="btn btn-danger btn-sm delete">Deletar</a>
                    </td>
                `;

                list.appendChild(linha);
                showAlert("POST adicionado", );
            } 
            
            else {
                selectedRow.children[0].textContent = tituloC;
                selectedRow.children[1].textContent = subtitulo;
                selectedRow.children[2].textContent = conteudo;
                selectedRow.children[3].innerHTML = `<img src="${imgSrc}" alt="Imagem selecionada">`;

                showAlert("POST editado", "info");
            }

            selectedRow = null;
            clear();
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
});

//editar
document.querySelector("#Post-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#tituloC").value =  selectedRow.children[0].textContent;
        document.querySelector("#subtitulo").value =  selectedRow.children[1].textContent;
        document.querySelector("#txtArea").value =  selectedRow.children[2].textContent;
    }
});


//deletar dados
document.querySelector("#Post-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("DADOS DELETADO", "danger");
    }
});

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