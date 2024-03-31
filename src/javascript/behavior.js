// Abaixo tem a função de abrir e fechar a "introdução" com cliques.

const AllTrigger = document.querySelectorAll('.trigger')

AllTrigger.forEach((trigger) => {
    trigger.addEventListener('click', (e) =>{

        const paiDoTrigger = trigger.parentElement
        const isOpen = paiDoTrigger.classList.contains('open')

        if (isOpen){
            paiDoTrigger.classList.remove('open')            
        } else{
            paiDoTrigger.classList.add('open')
        }
    })
});
// .................................................................