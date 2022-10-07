const limparFormulario = () => {
  document.getElementById("txtName").value = "";
  document.getElementById("txtCep").value = "";
  document.getElementById("txtStreet").value = "";
  document.getElementById("txtNumber").value = "";
  document.getElementById("txtComplement").value = "";
  document.getElementById("txtNeighborhood").value = "";
  document.getElementById("txtCity").value = "";
  document.getElementById("txtState").value = "";
};

const prepararFormulario = () => {
  document.getElementById("txtStreet").value = "";
  document.getElementById("txtNeighborhood").value = "";
  document.getElementById("txtCity").value = "";
  document.getElementById("txtState").value = "";
};

function buscaCep() {
  prepararFormulario();

  let cep = document.getElementById("txtCep").value;

  if (cep !== "") {
    let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();

    req.onload = function () {
      if (req.status === 200) {
        let endereco = JSON.parse(req.response);
        let isUndefined = "validarApi"

        isUndefined = endereco.street;
        (isUndefined) ? document.getElementById("txtStreet").value = endereco.street : document.getElementById("txtStreet").value = "Inserir rua...";

        isUndefined = endereco.neighborhood;
        (isUndefined) ? document.getElementById("txtNeighborhood").value = endereco.neighborhood : document.getElementById("txtNeighborhood").value = "Inserir bairro...";

        isUndefined = endereco.city;
        (isUndefined) ? document.getElementById("txtCity").value = endereco.neighborhood : document.getElementById("txtCity").value = "Inserir cidade...";

 
        isUndefined = endereco.state;
        (isUndefined) ? document.getElementById("txtState").value = endereco.neighborhood : document.getElementById("txtState").value = "Inserir estado...";
        
      } else if (req.status === 404) {
        alert("CEP inválido");
      } else {
        alert("Erro de requisição");
      }
    };
  }
}

window.onload = function () {
  let txtCep = document.getElementById("txtCep");
  txtCep.addEventListener("blur", buscaCep);
};
