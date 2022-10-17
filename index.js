/* 

    OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior

    - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

    - passo 2 - dar um jeito de identificar o clique no elemento da aba

 	- passo 3 - quando o usuário clicar, desmarcar a aba selecionada

	- passo 4 - marcar a aba clicada como selecionado

	- passo 5 - esconder o conteúdo anterior

	- passo 6 - mostrar o conteúdo da aba selecionada

*/

// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    // passo 2 - dar um jeito de identificar o clique no elemento da aba
    tab.addEventListener("click", function() {

        if(tab.classList.contains("select")){
            return;
        }

        tabSelect(tab)
        showTabInfo(tab)
    });
});

function tabSelect(tab) {
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const tabSelect = document.querySelector(".tab.select")
    tabSelect.classList.remove("select")

    // passo 4 - marcar a aba clicada como selecionado
    tab.classList.add("select")
}

function showTabInfo(tab){
    // passo 5 - esconder o conteúdo anterior
    const selectInfo = document.querySelector(".information.select") 
    selectInfo.classList.remove("select")

    // passo 6 - mostrar o conteúdo da aba selecionada
    const idElementInfoTab = `information-${tab.id}`

    const infoForShow = document.getElementById(idElementInfoTab)
    infoForShow.classList.add("select")
}
