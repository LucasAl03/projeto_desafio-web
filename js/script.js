//Pegando elementos do dom
const formPessoa = document.querySelector ("#formulario-pessoa")
const divDados = document.querySelector ("#div-dados")

formPessoa.addEventListener('submit', (evt) =>{
    evt.preventDefault()

    const dadosForm = new FormData(formPessoa)

    const nome = dadosForm.get('nome')
    const idade = dadosForm.get('idade')

    let situacaoIdade = idade >= 18 ? `${nome}, é Maior de Idade`: `${nome}, é Menor de Idade`

    divDados.innerHTML = situacaoIdade

})