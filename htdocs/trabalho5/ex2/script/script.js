document.addEventListener('DOMContentLoaded', function(){
    const nodeH1 = document.querySelector("h1");
        nodeH1.addEventListener("click",alteraConteudo);
});

function alteraConteudo(e){
    e.target.textContent = "Avatar :D";
}

document.addEventListener('DOMContentLoaded', function(){
    const nodesH2 = document.querySelectorAll("h2");
    for(let node of nodesH2)
        node.addEventListener("click",alteraConteudoH2);
});

function alteraConteudoH2(f){
    f.target.textContent = "Obrigado";
}