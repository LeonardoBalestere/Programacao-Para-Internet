window.onload=function(){
    const modal = document.querySelector(".modal"); //Seleciona o elemnto que possui a classe modal
    const buttonClose = modal.querySelector(".buttonClose"); //Seleciona a classe buttonClose que está dentro do elemento modal
    buttonClose.addEventListener("click", function(){
        modal.style.display='none';//Altera a propriedade do elemento display para que a caixa fique invisível
    
    });

    const buttonOpenModal = document.getElementById("btnOpenModal");
    buttonOpenModal.addEventListener("click",function(){
        modal.style.display='block'; //Altera a propriedade do elemento display para que a caixa fique visível
    })
}