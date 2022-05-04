const numConselho = document.querySelector ('#id-conselho');
const texto = document.querySelector ('#texto');
const geraNovoConselho = document.querySelector ('.btn-gera-conselho');

function geraConselho (){
    
    fetch (`https://api.adviceslip.com/advice`)
    
    .then (resposta => {
        return resposta.json();
    })
    .then(data => {
        /*numConselho.textContent = `${numConselho.slip}`
        console.log(numConselho)*/
        const textoConselho = data.slip;
        texto.textContent = `"${textoConselho.advice}"`
    }
)};

geraNovoConselho.addEventListener("click", () => {
    geraConselho();
});

geraConselho();