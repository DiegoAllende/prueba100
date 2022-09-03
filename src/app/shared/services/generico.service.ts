import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDoiModel, TipoOperadorModel } from '@shared/models/generico/generico.models';
import { ResponseModel } from '@shared/models/generico/http.model';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericoService {
  base = environment.urlbase;
  baseGenerico = `${this.base}/random`;

  constructor(private http: HttpClient) { }

  getTipoDoiListar(tipoPersoneria: number) {
    const paramsOut = { pbytTipoPers: tipoPersoneria };
    // return this.http.get<ResponseModel<TipoDoiModel[]>>(this.baseGenerico).pipe(
    //   map(x => this.RESP_TIPOS_DOI)
    // );
    return of(this.RESP_TIPOS_DOI);
  }

  getTipoOperadorListar() {
    // return this.http.get<ResponseModel<TipoOperadorModel[]>>(this.baseGenerico).pipe(
    //   map(x => this.RESP_TIPOS_OPERADOR)
    // );
    return of(this.RESP_TIPOS_OPERADOR);
  }

  // DATA PRUEBA
  RESP_TIPOS_DOI: TipoDoiModel[] = [
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
  ];

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

}
