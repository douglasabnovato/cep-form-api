const limparFormulario = () => {
  document.getElementById("txtName").value = "";
  document.getElementById("txtCep").value = "";
  document.getElementById("txtStreet").value = "";
  document.getElementById("txtNumber").value = "";
  document.getElementById("txtComplement").value = "";
  document.getElementById("txtNeighborhood").value = "";
  document.getElementById("txtCity").value = "";
  document.getElementById("txtState").value = "";

  var element = document.getElementById("validation-txtName");
  element.classList.remove("error");
  element.classList.remove("success");
  element = document.getElementById("validation-txtCep");
  element.classList.remove("error");
  element.classList.remove("success");
  element = document.getElementById("validation-txtStreet");
  element.classList.remove("error");
  element.classList.remove("success");
  element = document.getElementById("validation-txtNumber");
  element.classList.remove("error");
  element.classList.remove("success");
  element = document.getElementById("validation-txtComplement");
  element.classList.remove("error");
  element.classList.remove("success");
  element = document.getElementById("validation-txtNeighborhood");
  element.classList.remove("error");
  element.classList.remove("success");
  element = document.getElementById("validation-txtCity");
  element.classList.remove("error");
  element.classList.remove("success");
  element = document.getElementById("validation-txtState");
  element.classList.remove("error");
  element.classList.remove("success");

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
