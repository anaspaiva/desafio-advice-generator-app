const numConselho = document.querySelector ('#id-conselho');
const texto = document.querySelector ('#texto');
const geraNovoConselho = document.querySelector ('.btn-gera-conselho');

async function geraConselho (){
    try { 
        const data = await fetch (`https://api.adviceslip.com/advice`)
        .then (resposta => {
            return resposta.json();
        })
            if (data){
                const numero = data.slip;
                numConselho.textContent = `${numero.id}`
                const txt = data.slip;
                texto.textContent = `"${txt.advice}"`
            }
    }
    catch (err){
        window.alert("Não foi possível gerar um novo conselho!");
        console.log(err)
    }
}
geraNovoConselho.addEventListener("click", () => {
    geraConselho();
});

geraConselho();