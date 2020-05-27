function buscaCep() {
    let cep = document.querySelector("#cep").value;
    event.preventDefault();

    axios.get("https://api.postmon.com.br/v1/cep/" + cep)
        .then(function (response) {
            infos(response.data);
        })
        .catch(function (error) {
            console.log(error)
            alert('CEP não encontrado, por favor tente novamente!')
        })

        
}

function infos(x) {
    document.querySelector('.resultado').style.display = "block";
    
    document.querySelector('.resultado').innerHTML = `
        <p> <b>Cidade:</b> <i>${x.cidade}</i></p>
        <p> <b>Bairro:</b> <i>${x.bairro}</i></p>
        <p> <b>Endereço:</b> <i>${x.logradouro}</i></p>
    `
}

/*
function showResults(address){
    document.querySelector('#results').style.display = "block"; // seleciona a div e faz ela aparecer como um bloco

    document.querySelector("#results").innerHTML = `
        <p> <b> Cidade: </b> ${address.cidade} </p>
        <p> <b> Bairro: </b> ${address.bairro} </p>
        <p> <b> Endereço: </b> ${address.logradouro} </p>
    `

} */