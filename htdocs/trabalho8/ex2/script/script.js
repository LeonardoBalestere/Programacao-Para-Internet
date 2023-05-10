window.onload = function () {
    document.forms.registraContato.onsubmit = validaFormContato;
}
function validaFormContato(e) {

    let form = e.target;
    let formValido = true;

    const spanNome = form.nome.nextElementSibling;
    const spanEmail = form.email.nextElementSibling;
    const spanInformacaoComplementar = form.informacaoComplementar.nextElementSibling;
    const spanModal = form.modalExemplo.nextElementSibling;

    spanNome.textContent = "";
    spanEmail.textContent = ""
    spanInformacaoComplementar.textContent = ""

    if (form.nome.value === "") {
        spanModal;
        formValido = false;
    }
    if (form.email.value === "") {
        spanModal;
        formValido = false;
    }
    if (form.informacaoComplementar.value === "") {
        spanModal;
        formValido = false;
    }
    return formValido;
}
