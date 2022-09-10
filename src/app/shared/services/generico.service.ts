import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParamsListaCuentasOutModel, TipoCuentaSaldoInModel, TipoDoiModel, TipoMonedaInModel, TipoOperadorModel } from '@shared/models/generico/generico.models';
import { ResponseModel } from '@shared/models/generico/http.model';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericoService {
  base = environment.urlbase;
  baseGenerico = `${this.base}/random`;
  baseCommon = `${environment.urlCommon}`

  constructor(private http: HttpClient) { }

  getTipoDoiListar(tipoPersoneria: number) {
    const url = `${this.baseCommon}document-types/person-type/${tipoPersoneria}`;
    // return this.http.get<ResponseModel<TipoDoiModel[]>>(url);
    return of(this.RESP_TIPOS_DOI);
  }

  getTipoOperadorListar() {
    // return this.http.get<ResponseModel<TipoOperadorModel[]>>(this.baseGenerico).pipe(
    //   map(x => this.RESP_TIPOS_OPERADOR)
    // );
    return of(this.RESP_TIPOS_OPERADOR);
  }
  
  getCuentaOrigenListar(params:ParamsListaCuentasOutModel){
    // return this.http.get<ResponseModel<TipoOperadorModel[]>>(this.baseGenerico).pipe(
    //   map(x => this.RESP_TIPOS_OPERADOR)
    // );
    return of(this.RESP_CUENTAS_ORIGEN);
  }

  getCuentaDestinoListar(params:ParamsListaCuentasOutModel){
    // return this.http.get<ResponseModel<TipoOperadorModel[]>>(this.baseGenerico).pipe(
    //   map(x => this.RESP_TIPOS_OPERADOR)
    // );
    return of(this.RESP_CUENTAS_DESTINO);
  }

  getMonedaListar(tipoPersoneria: number){
    // const paramsOut = { pbytTipoPers: tipoPersoneria };
    // return this.http.get<ResponseModel<TipoDoiModel[]>>(this.baseGenerico).pipe(
    //   map(x => this.RESP_TIPOS_DOI)
    // );
    return of(this.RESP_MONEDAS);
  }

  // DATA PRUEBA
  RESP_TIPOS_DOI: ResponseModel<TipoDoiModel[]> = {
    isSuccess: true,
    message: "",
    messageCode: 1,
    messageType: null,
    data: [
      {
        bytTipoPers: 1,
        bytTipoDOI: 1,
        strDOI: "DNI",
        strAbreviatura: "DNI",
        blnNumCarFijo: true,
        bytNumCarMin: 8,
        bytNumCarMax: 8,
      },
      {
        bytTipoPers: 1,
        bytTipoDOI: 2,
        strDOI: "Carnet de Extranjería",
        strAbreviatura: "C.J.",
        blnNumCarFijo: false,
        bytNumCarMin: 10,
        bytNumCarMax: 12,
      },
    ]
  };

  RESP_TIPOS_OPERADOR: TipoOperadorModel[] = [
    {
      bytCodOperador: 1,
      strOperador: "Movistar",
    },
    {
      bytCodOperador: 2,
      strOperador: "Claro",
    },
    {
      bytCodOperador: 3,
      strOperador: "Nextel",
    },
    {
      bytCodOperador: 4,
      strOperador: "Entel",
    },
    {
      bytCodOperador: 5,
      strOperador: "Bitel",
    },
  ];


  RESP_CUENTAS_ORIGEN: TipoCuentaSaldoInModel[] = [
    {
      strCodProd: "",
      strProducto: "",
      strCodCta: "156729403782",
      strSubProducto: "Ahorro Sueldo",
      bytMoneda: 1,
      strMonSimbolo: "S/",
      decSaldoDisp: 5357.16,
      blnOrigen: true
      
    },
    {
      strCodProd: "",
      strProducto: "",
      strCodCta: "156729403762",
      strSubProducto: "Ahorro Total Disponibilidad",
      bytMoneda: 1,
      strMonSimbolo: "S/",
      decSaldoDisp: 1200.00,
      blnOrigen: true 
    }
  ]

  RESP_CUENTAS_DESTINO: TipoCuentaSaldoInModel[] = [
    {
      strCodProd: "",
      strProducto: "",
      strCodCta: "156729403782",
      strSubProducto: "Ahorro Sueldo",
      bytMoneda: 1,
      strMonSimbolo: "S/",
      decSaldoDisp: 3004.16,
      blnOrigen: true
      
    },
    {
      strCodProd: "",
      strProducto: "",
      strCodCta: "156729403762",
      strSubProducto: "Ahorro Total Disponibilidad",
      bytMoneda: 1,
      strMonSimbolo: "S/",
      decSaldoDisp: 7859.00,
      blnOrigen: true 
    }
  ]

  RESP_MONEDAS: TipoMonedaInModel[] = [
    {
      strCodeMon: 1,
      strMoneda: "Soles"
    },
    {
      strCodeMon: 2,
      strMoneda: "Dolares"
    }
  ]

}
