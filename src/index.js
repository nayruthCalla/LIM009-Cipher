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

const option = document.getElementById("main");

option.addEventListener("click", e => {
  let getString = String(document.getElementById("password").value);
  let getOffset = parseInt(document.getElementById("offset").value);

  switch (e.target.id) {
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
      break;
    case "btn-exit":
      location.reload();

    default:
  }
});
