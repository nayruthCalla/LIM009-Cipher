/* Acá va tu código */
const showname = () => { //funcion para obtener nombre y saludar
  const userName = document.getElementById("user").value;
  if (userName.length == 0) {
    alert("INGRESE SU NOMBRE POR FAVOR :)");
  } else {
    document.getElementById(
      "welcomeUser"
    ).innerHTML = ` BIENVENIDX ${userName}`;

    document.getElementById("root").style.display = "none";
    document.getElementById("form-decode").style.display = "block";
  }
};

const option = document.getElementById("main"); //obteniendo el id de la etiqueta contenedora main

option.addEventListener("click", e => {
  let getString = String(document.getElementById("password").value);  // recepcionando y convirtiendo a string la palabra ingresada por teclado
  let getOffset = parseInt(document.getElementById("offset").value); // reciclando y convirtiendo a numero entero el desplazamiento

  switch (e.target.id) { //obteniendo id de los botones con el evento click
    case "submit":
      showname();
      break;
    case "btn-encode":
      document.getElementById("setPass").innerHTML = cipher.encode(
        getOffset,
        getString
      );
      break;
    case "btn-decode":
      document.getElementById("setPass").innerHTML = cipher.decode(
        getOffset,
        getString
      );
      break;
    case "btn-clear":
      document.getElementById("offset").value = "";
      document.getElementById("password").value = "";
      document.getElementById('setPass').innerHTML = " ";
      break;
    case "btn-exit":
      location.reload();

      break;
  }
});
