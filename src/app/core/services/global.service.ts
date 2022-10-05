import { Injectable } from '@angular/core';
import { DataGlobal } from '@core/models/data-global';
import { ConstUI } from '@utils/const-ui';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public static data: DataGlobal;

  dataUI = {
    datos: "Datos",
    transferencia: "Transferencia",
    resumen: "Resumen",
  }

  constructor() { }

  setData(dataGlobal: DataGlobal, key: string) {
    environment.keyPublic = key;
    GlobalService.data = dataGlobal;
    ConstUI.setValues(this.dataUI);
  }

}
