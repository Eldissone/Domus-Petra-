let titulo = document.querySelectorAll(".titulo");
let texto = document.querySelector(".texto");
let img = document.querySelector(".imgT");

if (document.readyState == "loading") {
    
    function checar () {
        const Card = localStorage.getItem("Card");
        const CardObjeto = JSON.parse(Card);

        if (CardObjeto) {

           titulo[0].innerText = CardObjeto.titulo;
           titulo[1].innerText = CardObjeto.titulo;
           texto.innerText = CardObjeto.texto;
           let top = document.querySelector(".hed-tit");

           top.style.backgroundImage = `url(${CardObjeto.img})`;
           top.style.backgroundSize ="cover";
           top.style.backgroundPosition ="50% 50%";
           top.style.backgroundRepeat ="no-repeat";
           console.log(titulo)
        
            
        } else {
            console.log("deu ruim");
        }
    }       
    
    checar ();
} 

else{

    alert("nao carregou");
}