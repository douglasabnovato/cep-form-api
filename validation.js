const form = document.getElementById("form");
const username = document.getElementById("txtName");
const cep = document.getElementById("txtCep");
const street = document.getElementById("txtStreet");
const numberStr = document.getElementById("txtNumber");
const complement = document.getElementById("txtComplement");
const neighborhood = document.getElementById("txtNeighborhood");
const city = document.getElementById("txtCity");
const state = document.getElementById("txtState");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const cepValue = cep.value.trim();
  const streetValue = street.value.trim();
  const numberStrValue = numberStr.value.trim();
  const complementValue = complement.value.trim();
  const neighborhoodValue = neighborhood.value.trim();
  const cityValue = city.value.trim();
  const stateValue = state.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Esse campo é obrigatório!");
  } else {
    setSuccessFor(username);
  }

  if (cepValue === "") {
    setErrorFor(cep, "Esse campo é obrigatório!");
  } else {
    setSuccessFor(cep);
  }

  if (streetValue === "") {
    setErrorFor(street, "Esse campo é obrigatório!");
  } else {
    setSuccessFor(street);
  }

  if (numberStrValue === "") {
    setErrorFor(numberStr, "Esse campo é obrigatório!");
  } else {
    setSuccessFor(numberStr);
  }

  if (complementValue === "") {
    setErrorFor(complement, "Esse campo é obrigatório!");
  } else {
    setSuccessFor(complement);
  }

  if (neighborhoodValue === "") {
    setErrorFor(neighborhood, "Esse campo é obrigatório!");
  } else {
    setSuccessFor(neighborhood);
  }

  if (cityValue === "") {
    setErrorFor(city, "Esse campo é obrigatório!");
  } else {
    setSuccessFor(city);
  }

  if (stateValue === "") {
    setErrorFor(state, "Esse campo é obrigatório!");
  } else {
    setSuccessFor(state);
  }

}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

