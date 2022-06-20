const login = document.querySelector("#submitButton");
const nameH2 = document.querySelector("#welcome");
let loaded = 0; 
let numb = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Olá, eu existo");
    // Comentário para caso o botao não funcione mais -> Evento de carregamento principal da página
});


login.addEventListener("click", e=>{ //Botão de login
    numb++;
    document.querySelector("#contagem").textContent = numb;
})

nameH2.addEventListener("mouseover", e=>{
    nameH2.classList.add("movementLeft");
})

