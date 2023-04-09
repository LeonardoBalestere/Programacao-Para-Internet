window.onload = function() {
    buttons = document.querySelectorAll("nav button");
    for(let button of buttons){
        button.onclick = () => { openTab(button.dataset.tabname) };
    }

    openTab("HOME");
}

openTab = (tabName) => {
    const lastTabActive = document.querySelector(".tabActive");
    if(lastTabActive !== null)
        lastTabActive.className = "";
    
    const lastButtonActive = document.querySelector(".buttonActive");
    if(lastButtonActive !== null)
        lastButtonActive.className = "";

    const querry1 = ".tabs > section[data-tabname='" + tabName + "']";
    const querry2 = "nav button[data-tabname='" + tabName + "']";

    document.querySelector(querry1).className = "tabActive";
    document.querySelector(querry2).className = "buttonActive";
}