document.addEventListener('DOMContentLoaded', function(){
    const nodeH2 = document.querySelectorAll("h2") // Seleciono uma lista de todos os elemntos h2
   
    for(let node of nodeH2){ // loop pra cada h2
        node.addEventListener("click", () => { // Sempre que houver um click faz o que está na arrow function
            node.nextElementSibling.style.display = "none" // Esconde a div que está abaixo do h2
        })
        node.addEventListener("dblclick", () =>{ // Sempre que houver um click faz o que está na arrow function
            node.nextElementSibling.style.display = "block" // mostra a div que está abaixo do h2
        })
    }
})