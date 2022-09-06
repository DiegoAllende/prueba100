import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CuentasService } from '@shared/services/cuentas.service';
import { PASOS } from '@utils/constantes';
import * as moment from 'moment';
import { adapterDatosCuenta } from '../../models-adapter/ahorro.adapter';
import { adapterMovimientos } from '../../models-adapter/movimientos.adapter';
import { adapterRetenciones } from '../../models-adapter/retenciones.adapter';
import { CuentaDatos } from '../../models/cuenta-datos.model';
import { Movimientos } from '../../models/movimientos.model';
import { Retenciones } from '../../models/retenciones.model';

@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.component.html',
  styleUrls: ['./ahorros.component.scss']
})
export class AhorrosComponent implements OnInit {
  codigoCuenta = "";
  cuenta!: CuentaDatos;
  listaRetenciones: Retenciones[] = [];
  listaMovimientos: Movimientos[] = [];

  listDates!:any[]
  year:string = ''
  month:string = ''
  yearPdf:string = ''
  movementsList:any[]=[];

  PASOS = PASOS;
  numPaso: number = PASOS.INI;

  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute,
    private cuentasService: CuentasService,
  ) {
    this.codigoCuenta = this.activeRoute.snapshot.paramMap.get('codCuenta') || "";
  }

  ngOnInit(): void {
    this.getDatosCuenta();
    this.getMovimientos();
    this.getRetenciones();
    this.getDates(12);
  }

  //SERVICIOS
  getDatosCuenta() {
    const params = {pstrCodPers: "4900127272", pstrCodCta: this.codigoCuenta};
    this.cuentasService.getCuentaDatosObtener(params).subscribe(resp => {
      this.cuenta = adapterDatosCuenta(resp);
    }, error => {
      console.log("**error**: ", error);
    });
  }

  getMovimientos() {
    const params = {pstrCodPers: "4900127272", pstrCodCta: this.codigoCuenta};
    this.cuentasService.getCuentaMovimientosListar(params).subscribe(resp => {
      this.listaMovimientos = adapterMovimientos(resp);
    }, error => {
      console.log("**error**: ", error);
    });
  }

  getRetenciones() {
    const params = {pstrCodPers: "4900127272", pstrCodCta: this.codigoCuenta};
    this.cuentasService.getCuentaRetencionesListar(params).subscribe(resp => {
      this.listaRetenciones = adapterRetenciones(resp);
    }, error => {
      console.log("**error**: ", error);
    });
  }

  btnVerPdf() {
    console.log("estado de cuenta");
  }

  btnChequesRet() {
    this.numPaso = PASOS.FIN;
    const params = {pintAnio: "", pintMes: "", pstrCodCta: this.codigoCuenta};
  }
  
  btnRegresar() {
    if(this.numPaso === PASOS.INI) this.router.navigate(["/main"]);
    this.numPaso = PASOS.INI;
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
  }
}
