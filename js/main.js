const numConselho = document.querySelector('#id-conselho');
const texto = document.querySelector('#texto');
const btnGeraNovoConselho = document.querySelector('.btn-gera-conselho');

alert("Bem vindo! Clique no botão verde para gerar seu conselho diário!");


async function geraConselho() {
    btnGeraNovoConselho.disabled = true;
    try {
        const habilitaBotao = setTimeout(function () {
            btnGeraNovoConselho.disabled = false;
        }, 2000);
        console.log(habilitaBotao);

        const data = await fetch(`https://api.adviceslip.com/advice`) // fetch já faz o GET e retorna uma promise
            .then(resposta => {
                return resposta.json();
            })
        if (data) {
            const num = data.slip;
            numConselho.textContent = `${num.id}`; //inicializando o objeto id (numero)
            const txt = data.slip;
            texto.textContent = `"${txt.advice}"`;
        }

    }
    catch (err) { //capturando o erro 
        alert("Não foi possível gerar um novo conselho!");
        console.log(err);
    }
}

btnGeraNovoConselho.addEventListener("click", () => {
    geraConselho();
});


