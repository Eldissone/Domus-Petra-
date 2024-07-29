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
 
// ========inicio==========
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else{
    ready();
}

function ready () {
    //Adicionar para a Caixa de visualizaçao
    let viewCard = document.getElementsByClassName('card-blog');

    for(var i = 0; i < viewCard.length; i++){
        let btn = viewCard[i]
        btn.addEventListener('click', addCardClick);
     }
}
document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', addCardClick);
});

function addCardClick(event) {
    let button = event.target;
    let CardVer = button.parentElement;
    let titulo = CardVer.querySelector('#tit-card').innerText;
    let texto = CardVer.querySelector('#texto').innerText;
    let imagem = CardVer.querySelector('#img-card').src;

    addCardVer (titulo, texto, imagem);
}


function addCardVer (titulo, texto, imagem) {
    const Card = {
        titulo:  titulo,
        texto:  texto, 
        img:  imagem, 
    }

    localStorage.setItem("Card", JSON.stringify(Card)) //transformar o objecto em string
    
    location.href = "visualizar.html";
    
}

document.querySelector(".logo").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("../index.html");
})