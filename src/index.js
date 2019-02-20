/* Acá va tu código */

function showname() {
  const userName = document.getElementById("user").value;
  if (userName.length == 0) {
    alert("INGRESE SU NOMBRE POR FAVOR :)");
  } else {
    document.getElementById("name").innerHTML = "Bienvenida  " + userName;
    root.style.display = "none";

    document.getElementById("welcome").style.display = "block";
  }
}
