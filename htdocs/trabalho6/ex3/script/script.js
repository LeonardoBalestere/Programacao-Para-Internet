window.onload=function(){
    const campoInteresse = document.querySelector("#interesse");
    campoInteresse.addEventListener("keyup",e=>{
        if(e.key==="Enter")
            adicionaInteresse();
    });
}
function adicionaInteresse(){
    const campoInteresse = document.querySelector("#interesse");
    const listaInteresses = document.querySelector("ol");

    const novoLi=document.createElement("li");
    const novoSpan=document.createElement("span");
    const novoBotao=document.createElement("button");

    novoSpan.textContent=campoInteresse.value;
    novoBotao.textContent='✖';

    novoLi.appendChild(novoSpan);
    novoLi.appendChild(novoBotao);
    listaInteresses.appendChild(novoLi);

    novoBotao.onclick = function(){
        listaInteresses.removeChild(novoLi);
    }
    campoInteresse.value='';
}