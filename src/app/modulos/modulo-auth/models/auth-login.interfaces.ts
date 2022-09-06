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