// Abaixo tem a função de abrir e fechar a "introdução" com cliques.

const littleHistoryTrigger = document.querySelectorAll('.trigger')

littleHistoryTrigger.forEach((trigger) => {
    trigger.addEventListener('click', (e) =>{

        const littleHist = trigger.parentElement
        const isOpen = littleHist.classList.contains('open')

        if (isOpen){
            littleHist.classList.remove('open')            
        } else{
            littleHist.classList.add('open')
        }
    })
});
// .................................................................