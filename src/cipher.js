window.cipher = {
  encode: (offset, string) => {
    //declarando parámetros al método encode
    let arrConvr = [];

    /* Acá va tu código */

    for (let i = 0; i < string.length; i++) {
      let getAscii = string.charCodeAt(i); //obteniendo el valor numérico de codigo Ascii
      if (65 <= getAscii && getAscii <= 90) {
        // Validamos si las letras ingresadas son mayúsculas
        arrConvr += String.fromCharCode(((getAscii - 65 + offset) % 26) + 65); // concatenando cada letra para formar una palabra
      } else {
        alert("ingrese una letra mayúscula xf");
      }
    }
    return arrConvr;
  },
  decode: (offset, string) => {
    let arrDecode = [];
    //declarando parámetros al método encode
    /* Acá vvvva tu código */
    for (let i = 0; i < string.length; i++) {
      let getAsciii = string.charCodeAt(i); //obteniendo el valor numerico de codigo Ascii
      if (65 <= getAsciii && getAsciii <= 90) {
        // Validamos si las letras ingresadas son mayúsculas
        arrDecode += String.fromCharCode(((getAsciii - 90 - offset) % 26) + 90); // concatenando cada letra para formar una palabra
      } else {
        alert("ingrese mayúsculas por favor :)");
      }
    }
    return arrDecode;
  }
};
