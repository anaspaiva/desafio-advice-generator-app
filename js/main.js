const numConselho = document.querySelector ('#id-conselho');
const texto = document.querySelector ('#texto');
const geraNovoConselho = document.querySelector ('.btn-gera-conselho');

function geraConselho (){
    
    fetch (`https://api.adviceslip.com/advice`)
    
    .then (resposta => {
        return resposta.json();
    }) 
    .then (data => {
        const numero = data.slip;
        numConselho.textContent = `${numero.id}`
        const txt = data.slip;
        texto.textContent = `"${txt.advice}"`
    })
}

geraNovoConselho.addEventListener("click", () => {
    geraConselho();
});

geraConselho();