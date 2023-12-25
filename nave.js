document.addEventListener('DOMContentLoaded', () => {
    const numNeves = 50

    for(let i = 0; i < numNeves; i++){
        criarNeves()
    }

    function criarNeves(){
        const neve = document.createElement('div')
        neve.className = 'neve'
        neve.innerHTML = '❄'
        document.querySelector('.neves').appendChild(neve)

        const startDelay = Math.random() * 5;
        const fallDuration = Math.random() * 5 + 5

        neve.style.left = Math.random() * 100 + "vw"
        neve.style.animationDelay = `-${startDelay}s`
        neve.style.animationDuration = `${fallDuration}s`
    }
})