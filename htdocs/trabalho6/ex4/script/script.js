window.onload = function() {
    buttons = document.querySelectorAll("nav button");
    for(let button of buttons){
        button.onclick = () => { openTab(button.dataset.tabname) };
    }

    openTab("BCC");
}
openTab = (tabName) => {
    const lastTabActive = document.querySelector(".tabActive");
    if(lastTabActive !== null){
        lastTabActive.className = "";
    }
}