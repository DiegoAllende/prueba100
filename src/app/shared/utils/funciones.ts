import * as moment from 'moment';

export function fnDatesMonthYear(number: number) {
  let date = new Date()
  let startDate = moment(date).locale('es-es');;
  const result = [];

  for (let i = 0; i < number; i++) {
    startDate.subtract(1, 'month')
    let obj = {
      mes: startDate.format('MMMM'),
      anio: startDate.format('YYYY'),
      stringMuestra: `${startDate.format('MMMM')} / ${startDate.format('YYYY')}`
    }
    result.push(obj)
  }
  return result
}

export function downLoadLocal(ruta: string, nombre: string) {
  const element = document.createElement("a");
  element.target = "_blank";
  element.href = ruta;
  element.download = nombre
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function aaa() {
  console.log("aaaaa");
  
}