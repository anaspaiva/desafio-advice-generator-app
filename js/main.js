const numConselho = document.querySelector ('#id-conselho');
const texto = document.querySelector ('#texto');
const geraNovoConselho = document.querySelector ('.btn-gera-conselho');

alert("Bem vindo! Clique no botão verde para gerar seu conselho diário!");


async function geraConselho (){
document.querySelector ('.btn-gera-conselho').disabled = true
    try {  
        setTimeout(function() {
            document.querySelector ('.btn-gera-conselho').disabled = false
            }, 2000);
            console.log(setTimeout);

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
        alert("Não foi possível gerar um novo conselho!");
        console.log(err)
    }
}
    
geraNovoConselho.addEventListener("click", () => {
    geraConselho();
});


