document.addEventListener('DOMContentLoaded', function(){
    const botao = document.querySelector("#abre");
    botao.onclick = function(){
        const msg = document.getElementById("texto");
        showMessage(msg.value);
    }
    const botao1 = document.querySelector("#fecha");
    botao1.onclick = function(){
        const botao1 = document.querySelector(".hidden");
        botao1.style.visibility ='hidden';
    }
});
function showMessage(e){
    const nodeP = document.querySelector("p");
    nodeP.textContent = e;
    const nodeH = document.querySelector(".hidden");
    nodeH.style.visibility ='visible';
};