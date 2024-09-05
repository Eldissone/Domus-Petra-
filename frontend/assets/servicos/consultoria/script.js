document.querySelector(".logo").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("../../index.html");

})

let orcamentoForm = document.querySelector(".orcamento");

document.querySelector("#orcamentoBtn").addEventListener("click", () => {
    orcamentoForm.classList.toggle("active");
} )
document.querySelector("#feicharBtn").addEventListener("click", () => {
    orcamentoForm.classList.toggle("active");
} )

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
    let titulo2 = CardVer.querySelector('#tit-card2').innerText;
    let texto = CardVer.querySelector('#texto').innerText;
    let imagem = CardVer.querySelector('#img-card').src;

    addCardVer (titulo, titulo2, texto, imagem);
}


function addCardVer (titulo, titulo2, texto, imagem) {
    const Card = {
        titulo:  titulo,
        titulo2:  titulo2,
        texto:  texto, 
        img:  imagem, 
    }

    localStorage.setItem("Card", JSON.stringify(Card)) //transformar o objecto em string
    
    location.href = "../../blog/visualizar.html";
    
}

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