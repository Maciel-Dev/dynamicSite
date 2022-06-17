const login = document.querySelector("#submitButton");
let loaded = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    loaded = 1;
    console.log("Olá, eu existo");
});

if(loaded == 1){  
    login.addEventListener('mouseover', e =>{
        console.log(e)
    })
};

