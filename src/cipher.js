window.cipher = {
  encode: (offset, string) => {
    //declarando parámetros al método encode
    let arrConvr = []; // array vacio para alamcenar cada letra y formar palabra u oración

    /* Acá va tu código */

    for (let i = 0; i < string.length; i++) { //recorriendo el string ingresado para obtener el índice
      let getAscii = string.charCodeAt(i); // charCodeAt para obtener el numero del codigo Ascii

      if (65 <= getAscii && getAscii <= 90) { // condicion para saber si es mayúscula 
        arrConvr += String.fromCharCode(((getAscii - 65 + offset) % 26) + 65); // mostrar,concatenar, y fórmula cesar para cifrar la letra obtenida por en codigo Ascii
      } else
        if (97 <= getAscii && getAscii <= 122) { // condicion para saber si es minúscula
          arrConvr += String.fromCharCode(((getAscii - 97 + offset) % 26) + 97); // mostrar,concatenar, y fórmula cesar para cifrar la letra obtenida por en codigo Ascii
        }
        else
          if (48 <= getAscii && getAscii <= 57) { // condicion para saber si es número
            arrConvr += String.fromCharCode(((getAscii - 48 + offset) % 10) + 48); // mostrar,concatenar, y fórmula cesar para cifrar el número obtenida por en codigo Ascii

          }
          else
            if (33 <= getAscii && getAscii <= 47) { // condicion para saber son caracteres especiales
              arrConvr += String.fromCharCode(((getAscii - 33 + offset) % 15) + 33); // mostrar,concatenar, y fórmula cesar para cifrar la letra obtenida por en codigo Ascii
            }
            else
              if (58 <= getAscii && getAscii <= 64) { // condicion para saber son caracteres especiales
                arrConvr += String.fromCharCode(((getAscii - 58 + offset) % 7) + 58); // mostrar,concatenar, y fórmula cesar para cifrar la letra obtenida por en codigo Ascii
              }
              else
                if (getAscii === 241 || getAscii === 209) { //  condicion para saber si es ñ o Ñ
                  arrConvr += String.fromCharCode(241); //mostrando  ñ como resultado en ambos casos
                }
                else
                  if (getAscii === 32) { // condicion para saber si es espacio 
                    arrConvr += String.fromCharCode(32);
                  } else {

                    arrConvr += ' Esta letra no esta en mi alfabeto :(';// letra que no se a establecido en las condiciones

                  }
    }
    return arrConvr;
  },
  decode: (offset, string) => {
    let arrDecode = []; // array vacio para alamcenar cada letra y formar palabra u oración
    //declarando parámetros al método decode
    /* Acá vvvva tu código */
    for (let i = 0; i < string.length; i++) {  //recorriendo el string ingresado para obtener el índice
      let getAsciii = string.charCodeAt(i); // charCodeAt para obtener el numero del codigo Ascii
      if (65 <= getAsciii && getAsciii <= 90) { // condicion para saber si es mayúscula 
        arrDecode += String.fromCharCode(((getAsciii - 90 - offset) % 26) + 90); // mostrar,concatenar, y fórmula cesar para cifrar la letra obtenida por en codigo Ascii
      } else
        if (97 <= getAsciii && getAsciii <= 122) { // condicion para saber si es minúscula
          arrDecode += String.fromCharCode(((getAsciii - 122 - offset) % 26) + 122); // mostrar,concatenar, y fórmula cesar para cifrar la letra obtenida por en codigo Ascii
        }
        else
          if (48 <= getAsciii && getAsciii <= 57) {  // condicion para saber si es número
            arrDecode += String.fromCharCode(((getAsciii - 57 - offset) % 10) + 57); // mostrar,concatenar, y fórmula cesar para cifrar el número obtenida por en codigo Ascii

          }
          else
            if (33 <= getAsciii && getAsciii <= 47) { // condicion para saber son caracteres especiales
              arrDecode += String.fromCharCode(((getAsciii - 47 - offset) % 15) + 47); // mostrar,concatenar, y fórmula cesar para cifrar la letra obtenida por en codigo Ascii
            }
            else
              if (58 <= getAsciii && getAsciii <= 64) { // condicion para saber son caracteres especiales
                arrDecode += String.fromCharCode(((getAsciii - 64 - offset) % 7) + 64); // mostrar,concatenar, y fórmula cesar para cifrar la letra obtenida por en codigo Ascii
              }
              else
                if (getAsciii === 241 || getAsciii === 209) { //  condicion para saber si es ñ o Ñ
                  arrDecode += String.fromCharCode(241); //mostrando  ñ como resultado en ambos casos
                }
                else
                  if (getAsciii === 32) {
                    arrDecode += String.fromCharCode(32); // condicion para saber si es espacio 
                  } else {

                    arrDecode += ' Esta letra no esta en mi alfabeto :(';// letra que no se a establecido en las condiciones

                  }
    }
    return arrDecode;
  }
};
