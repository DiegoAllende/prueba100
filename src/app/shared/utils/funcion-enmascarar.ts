export function getformatoTarjeta(
  texto: string,
  separador: string,
  maxTexto: number
): string {
  let resp = "";
  let valArray = texto.split("");
  valArray.forEach((_item, index) => {
    resp = resp + texto.charAt(index);
    if (((index + 3) % 4) === 0) {
      if (index < (maxTexto - 1)) resp = resp + separador;
    }
  });

  return resp;
}

export function getPartesTarjeta(val: string, pos: number, letra: string): { valorMask: string, valor: string } {
  let pro = val.substring(0, pos)
  let sdo = val.substring(pos)
  let aux = obtenerMask(pro) + letra + obtenerMask(sdo)
  let valorMask = aux;
  let valor = pro + letra + sdo;
  return { valorMask, valor };
}

export function getPosLetraTarjeta(val: string): { letra: string; pos: number } {
  let letra = "";
  let cont = "";
  let pos = 0;

  let valArray = val.split("");
  valArray.forEach((_item, index) => {
    cont = val.charAt(index);
    if (cont !== "*") {
      letra = letra + cont;
      pos = index;
    }
  });

  return { letra, pos };
}

export function obtenerMask(val: string): string {
  let aux = "";
  let valArray = val.split("");
  valArray.forEach(() => {
    aux = aux + "*";
  });
  return aux;
}
