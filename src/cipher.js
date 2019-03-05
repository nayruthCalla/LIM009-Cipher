window.cipher = {
  encode: (offset, string) => {
    //declarando parámetros al método encode
    let arrConvr = [];

    /* Acá va tu código */

    for (let i = 0; i < string.length; i++) {
      let getAscii = string.charCodeAt(i); //obteniendo el valor numérico de codigo Ascii

      if (65 <= getAscii && getAscii <= 90) {
        arrConvr += String.fromCharCode(((getAscii - 65 + offset) % 26) + 65);
      } else
        if (97 <= getAscii && getAscii <= 122) {
          arrConvr += String.fromCharCode(((getAscii - 97 + offset) % 26) + 97);
        }
        else
          if (48 <= getAscii && getAscii <= 57) {
            arrConvr += String.fromCharCode(((getAscii - 48 + offset) % 10) + 48);

          }
          else
            if (33 <= getAscii && getAscii <= 47) {
              arrConvr += String.fromCharCode(((getAscii - 33 + offset) % 15) + 33);
            }
            else
              if (58 <= getAscii && getAscii <= 64) {
                arrConvr += String.fromCharCode(((getAscii - 58 + offset) % 7) + 58);
              }
              else
                if (getAscii === 241 || getAscii === 209) {
                  arrConvr += String.fromCharCode(241);
                }
                else
                  if (getAscii === 32) {
                    arrConvr += String.fromCharCode(32);
                  } else {

                    arrConvr += ' Esta letra no esta en mi alfabeto :('

                  }
    }
    return arrConvr;
  },
  decode: (offset, string) => {
    let arrDecode = [];
    //declarando parámetros al método encode
    /* Acá vvvva tu código */
    for (let i = 0; i < string.length; i++) {
      let getAsciii = string.charCodeAt(i);
      if (65 <= getAsciii && getAsciii <= 90) {
        arrDecode += String.fromCharCode(((getAsciii - 90 - offset) % 26) + 90);
      } else
        if (97 <= getAsciii && getAsciii <= 122) {
          arrDecode += String.fromCharCode(((getAsciii - 122 - offset) % 26) + 122);
        }
        else
          if (48 <= getAsciii && getAsciii <= 57) {
            arrDecode += String.fromCharCode(((getAsciii - 57 - offset) % 10) + 57);

          }
          else
            if (33 <= getAsciii && getAsciii <= 47) {
              arrDecode += String.fromCharCode(((getAsciii - 47 - offset) % 15) + 47);
            }
            else
              if (58 <= getAsciii && getAsciii <= 64) {
                arrDecode += String.fromCharCode(((getAsciii - 64 - offset) % 7) + 64);
              }
              else
                if (getAsciii === 241 || getAsciii === 209) {
                  arrDecode += String.fromCharCode(241);
                }
                else
                  if (getAsciii === 32) {
                    arrDecode += String.fromCharCode(32);
                  } else {

                    arrDecode += ' Esta letra no esta en mi alfabeto :('

                  }
    }
    return arrDecode;
  }
};
