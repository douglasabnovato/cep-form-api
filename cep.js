function buscaCep(){
    let cep = document.getElementById("txtCep").value;

    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        console.log("url", url)
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function() {
            if(req.status === 200) {
                let endereco = JSON.parse(req.response);
                document.getElementById("txtStreet").value = endereco.street;
                document.getElementById("txtNeighborhood").value = endereco.neighborhood;
                document.getElementById("txtCity").value = endereco.city;
                document.getElementById("txtState").value = endereco.state;
            }
            else if(req.status === 404) {
                alert("CEP inválido")
            }
            else {
                alert("Erro de requisição")
            }
        }
    }
}

window.onload = function(){
    let txtCep = document.getElementById("txtCep");
    txtCep.addEventListener("blur", buscaCep);
}