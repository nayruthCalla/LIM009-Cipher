/* Acá va tu código */

const showname = () => {
  const userName = document.getElementById("user").value;
  if (userName.length == 0) {
    alert("INGRESE SU NOMBRE POR FAVOR :)");
  } else {
    document.getElementById(
      "welcomeUser"
    ).innerHTML = ` BIENVENIDA ${userName}`;

    document.getElementById("root").style.display = "none";
    document.getElementById("form-decode").style.display = "block";
  }
};

const btnEncod = () => {
  let getOffset = parseInt(document.getElementById("offset").value);
  let getString = String(document.getElementById("password").value);
  document.getElementById("setPass").innerHTML = cipher.encode(
    getOffset,
    getString
  );
};

const btnDecod = () => {
  let getOffset = parseInt(document.getElementById("offset").value);
  let getString = String(document.getElementById("password").value);
  document.getElementById("setPass").innerHTML = cipher.decode(
    getOffset,
    getString
  );
};

const btnClear = () => {
  document.getElementById("offset").value = "";
  document.getElementById("password").value = "";
};
