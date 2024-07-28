let titulo = document.querySelectorAll(".titulo");
let texto = document.querySelector(".texto");

let btnComent = document.querySelector("#Comentar");
let ComentDiv = document.querySelector(".sec-comentarios");
let logarD = document.querySelector(".logar");


const loginForm = document.querySelector(".login_form")
const loginInput = document.querySelector("#name")
const chat = document.querySelector(".sec-comentarios")
const chatForm = document.querySelector(".coment")
const chatInput = document.querySelector("#text-coment")
const chat_messages = document.querySelector(".chat-coment")

btnComent.addEventListener("click", ()=> {
    logarD.style.display = "flex";


})

if (document.readyState == "loading") {
    
    function checar () {
        const Card = localStorage.getItem("Card");
        const CardObjeto = JSON.parse(Card);

        if (CardObjeto) {

           titulo[0].innerText = CardObjeto.titulo;
           titulo[1].innerText = CardObjeto.titulo2;
           texto.innerText = CardObjeto.texto;
           let top = document.querySelector(".hed-tit");

           top.style.backgroundImage = `url(${CardObjeto.img})`;
           top.style.backgroundSize ="cover";
           top.style.backgroundPosition ="50% 50%";
           top.style.backgroundRepeat ="no-repeat";
        
            
        } else {
            console.log("sem dados clicado");
        }
    }       
    
    checar ();
} 

else{

    alert("nao carregou");
}


let userSMS = new Array(); 

const colors = [
    "cadeblue",
    "orange",
    "green",
    "brown",
    "red",
    "hotpink",
    "gold",
    "#ff6f00",
    "#e0dfdf"
]

const user = { id: "", name: "", color: "" }

let websocket

const createMessageOtherElement = (content, sender, senderColor) => {
    
    div = document.createElement("div");
    const span = document.createElement("span");
    const p = document.createElement("p");

    div.classList.add("coment-user");
    span.classList.add("user-name-coment");
    p.classList.add("txt-coment");
    span.style.color = senderColor;

    div.appendChild(span);
    div.appendChild(p);

    span.innerHTML = sender;
    p.innerHTML += content;

    return div;

}

const createMessageSelfElement = (content) => {

    div = document.createElement("div");
    const span = document.createElement("span");
    const p = document.createElement("span");


    div.classList.add("coment-user");
    span.classList.add("user-name-coment");
    p.classList.add("txt-coment");

    div.appendChild(span);
    div.appendChild(p);

    span.innerHTML = user.name;
    p.innerHTML += content;
    
   
    return div;
    
}


const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
}

const scrollScreen = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
}

const processMessage = ({data}) => {

    const {userId, userName, userColor, content} = (JSON.parse(data));

    const message = userId == user.id 
    ? createMessageSelfElement(content)
    : createMessageOtherElement(content, userName, userColor);


    chat_messages.appendChild(message);
    scrollScreen();
}


const handleLogin = (event) => {
    event.preventDefault()

    user.id = crypto.randomUUID();
    user.name = loginInput.value;
    user.color = getRandomColor();

    if (user.name === ""){
        alert("prencha seu nome")
    }
    
    else {
        ComentDiv.classList.toggle("active")
        logarD.style.display = "none";
        chat.style.display = "block";
    }
    


    websocket = new WebSocket("wss://backend-chat-ss58.onrender.com");

    websocket.onmessage = processMessage;


}
localStorage.clear()

const sendMessage = (event) => {
    event.preventDefault();

    const message = {
        userId: user.id,
        userName: user.name,
        userColor: user.color,
        content: chatInput.value
    }

    if(message.content == "") {
        alert("Comentario vazio")
    }
    else {        
        websocket.send(JSON.stringify(message));    
        chatInput.value = "";
        
        let userSMS = new Array();  
        
        if (localStorage.hasOwnProperty("userSMS")) {
            userSMS  = JSON.parse(localStorage.getItem("userSMS"));
        } 
        
        userSMS.push(message);
        
        localStorage.setItem("userSMS", JSON.stringify(userSMS))
        
    }
    
    // window.location.reload()
}


window.addEventListener("load", (event) => {
    event.preventDefault();

    if (userSMS){
        userSMS  = JSON.parse(localStorage.getItem("userSMS"));
        for (let i in userSMS){
            const {userId, userName, userColor, content} = userSMS[i];

            const message = userId == user.id 
            ? createMessageSelfElement(content)
            : createMessageOtherElement(content, userName, userColor);

            chat_messages.appendChild(message);

        }
        
    }else {
        console.log("sem dados de comentarios")
    }
});
        

loginForm.addEventListener("submit", handleLogin);
chatForm.addEventListener("submit", sendMessage);
