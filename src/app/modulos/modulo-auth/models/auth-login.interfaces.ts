export interface selloSegAuth {
  codigo: number;
  nombre: string;
  byteSello: string; 
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