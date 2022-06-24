const loginButton = document.querySelector("#submitButton");
const nameH2 = document.querySelector("#welcome");
const registButton = document.querySelector("#register");
const loginText = document.querySelector("#loginText");
const writingText = document.querySelector("#writingLogin");
const nameMain = document.querySelector("#infosisName");
const divUser = document.querySelector("#divUserName");



//                          Função inicial

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Olá, eu existo");
    registButton.classList.add("initialMovement");
    if(writingText.classList.contains("lASubTextWriting")){
        writingText.classList.remove("lASubTextWriting");

    }

    // Comentário para caso o botao não funcione mais -> Evento de carregamento principal da página
});

                        //Botão de Login -> Recebe o formulário apenas userName
function inputUser(){
    const userName = document.querySelector('#userName').value;
    const passWord = document.querySelector('#passWord').value;
    loginButton.addEventListener("click", e=>{
        if(userName == "Do a barrel roll"){
            console.log("Are you serious?");
            loginText.classList.add("Barrel");
            loginText.classList.remove("animationTextHover");
            setTimeout(() => { loginText.classList.remove("Barrel");}, 1000 );
            setTimeout(() => { loginText.classList.add("animationTextHover");}, 1000 );

        }

        if(userName == "Joao" && passWord == "123"){
            nameH2.classList.remove("movementCenter");
            registButton.classList.add("lARegister");
            nameH2.classList.add("lASubTextOff");
            writingText.textContent = "Você está logado como " + userName;
            console.log(writingText.textContent);
            writingLogin.classList.add("writingLogin");
            nameMain.classList.add("lANavTitle");
            divUser.classList.add("lARemoveForms");
            setTimeout(() => { divUser.classList.add("lASubTextOff");}, 5000 );

        }


    });
}

nameH2.addEventListener("mouseover", e=>{
    nameH2.classList.add("movementCenter");
    setTimeout(() => { nameH2.classList.remove("movementCenter");}, 5000 );
})

registButton.addEventListener("mouseover", e=>{
    registButton.classList.remove("initialMovement");
    registButton.classList.add("movementCenter");
})

