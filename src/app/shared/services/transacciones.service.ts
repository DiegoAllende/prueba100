import { Injectable } from '@angular/core';
import { AppTransaccionPrepararDatosOutModel } from '@shared/models/transacciones/transacciones.models';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  constructor() { }

  appTransaccionPrepararDatos(params: AppTransaccionPrepararDatosOutModel){
    // const paramsOut = { pbytTipoPers: tipoPersoneria };
    // return this.http.get<ResponseModel<TipoDoiModel[]>>(this.baseGenerico).pipe(
    //   map(x => this.RESP_TIPOS_DOI)
    // );
    return of(this.RESP_TRANSACCION_PREPARAR_DATOS);
  }

  RESP_TRANSACCION_PREPARAR_DATOS:any = {

  }

}
