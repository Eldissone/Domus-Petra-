// ========inicio==========
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
    console.log("carregou");
} else{
    ready();
}

function ready () {
  console.log("ready");
    //Adicionar para a Caixa de visualizaçao
    let viewCard = document.getElementsByClassName('card-blog')

    for(var i = 0; i < viewCard.length; i++){
        let btn = viewCard[i]
        btn.addEventListener('click', addCardClick)

        console.log(viewCard[i]);
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
    console.log(titulo);
    console.log(texto);
    console.log(imagem);

    addCardVer (titulo, texto, imagem);
}


function addCardVer (titulo, texto, imagem) {
    const Card = {
        titulo:  titulo,
        texto:  texto, 
        img:  imagem, 
    }

    localStorage.setItem("Card", JSON.stringify(Card)) //transformar o objecto em string
    
    location.href = "/Domus-Petra-/frontend/assets/blog/visualizar.html";
    
}

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let container = document.querySelector(".container-section")
let items = document.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicator");
let dots = indicator.querySelectorAll("ul li");

let list = container.querySelector(".list")


let active = 0;
let firstP = 0;
let lastP = items.length - 1;

function setS () {
    let itemOld = container.querySelector(".list .item.active");
    itemOld.classList.remove("active");

    let dotOld = indicator.querySelector("ul li.active");
    dotOld.classList.remove("active");
    dots[active].classList.add("active");

    indicator.querySelector(".number").innerText = "0" + (active + 1);

}

nextBtn.onclick = () => {
    list.style.setProperty('--calc', 1)
    active = active + 1 > lastP ? 0 : active + 1;
    setS()
    items[active].classList.add("active");

}

prevBtn.onclick = () => {
    list.style.setProperty('--calc', -1)
    active = active - 1 < firstP ? lastP : active - 1;
    setS()
    items[active].classList.add("active");
}
