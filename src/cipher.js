window.cipher = {
  encode: (offset, string) => {
    //declarando parámetros al método encode
    arrConvr = [];
    let getAscii = 0;
    /* Acá va tu código */

    for (let i = 0; i < string.length; i++) {
      getAscii = string.charCodeAt(i); //obteniendo el valor numérico de codigo Ascii
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
    arrDecode = [];
    //declarando parámetros al método encode
    /* Acá vvvva tu código */
    for (let i = 0; i < string.length; i++) {
      getAscii = string.charCodeAt(i); //obteniendo el valor numerico de codigo Ascii
      if (65 <= getAscii && getAscii <= 90) {
        // Validamos si las letras ingresadas son mayúsculas
        arrDecode += String.fromCharCode(((getAscii - 90 - offset) % 26) + 90); // concatenando cada letra para formar una palabra
      } else {
        alert("ingrese mayúsculas por favor :)");
      }
    }
    return arrDecode;
  }
};
