import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PASOS } from '@utils/constantes';
import * as moment from 'moment';

@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.component.html',
  styleUrls: ['./ahorros.component.scss']
})
export class AhorrosComponent implements OnInit {

  public listDates!:any[]

  public showRetenciones:boolean=false
  public year:string = ''
  public month:string = ''
  public yearPdf:string = ''
  public movementsList:any[]=[];

  PASOS = PASOS;
  numPaso: number = PASOS.INI;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getDates(12)
  }

  btnChequesRet() {
    this.numPaso = PASOS.FIN;
  }
  
  btnRegresar() {
    if(this.numPaso === PASOS.INI) {
      this.router.navigate(["/main"]);
    }
    
    this.numPaso = PASOS.INI;
  }


  showRetencionesEvent(){
    this.showRetenciones = true
    document.documentElement.scrollTop = 0
    // this.router.navigateByUrl('/main/consultas/ahorros')
  }

  closeRetenciones(value:boolean){
    this.showRetenciones= value
  }

  verData(data: any) {
    console.log("data1: ", data);
    
  }

  getDates(number:number){

    let date = new Date()
    let startDate = moment(date).locale('es-es');;
    const result = [];

    for(let i=0; i < number;i++ ){
      startDate.subtract(1,'month')
      let obj = {
        mes: startDate.format('MMMM'),
        anio: startDate.format('YYYY'),
        stringMuestra: `${startDate.format('MMMM')} / ${startDate.format('YYYY')}`
      }
      result.push(obj)
    }
    this.listDates = result
    console.log("cuantas fechas son", this.listDates)
  }
}
