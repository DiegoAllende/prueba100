export interface selloSegAuth {
  codigo: number;
  nombre: string;
  byteSello: string;
  check?:boolean;
}

export interface AppAuhtOut {
  tipoAuth: number;
  numTarjeta: string;
  clave: string;
  tipoDoi: number;
  numDoi: string;
  numIp: string;
}

export interface AppValidarGenClaveOut {
  numTarjeta: string;
  tipoDoi: number;
  numDoi: string;
  tipoOperador: number;
  numCelular: string;
  clave: string;
  numIp: string;
}

export interface AppGenClaveOut {
  codPers: string;
  codValid: string;
  numTarjeta: string;
  clave: string;
}

export interface AppGenClaveOlvidoOut {
  numTarjeta: string;
  tipoDoi: number;
  numDoi: string;
  clave4D: string;
  clave6D: string;
  numIp: string;
}

export interface AppClaveCambiarOut {
  primerCambioClave6D:boolean;
  codPers: string;
  numTarjeta: string;
  clave6D: string;
  nuevaClave6D:string;
  numIp: string;
}

export interface AppSelloInsertarOut {
  codPers: string;
  codSello :number
}
