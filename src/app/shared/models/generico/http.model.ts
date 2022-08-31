export interface ResponseModel<T> {
  lstResult: T
}

export interface TraceCMACTModel {
  lngIdSesion: number;
  sTrace: string;
  dFecha: string;
  bytIdCanal: string;
  bytIdAplicacion: string;
}

export interface ErrorRespModel {
  intCodigo: number;
  strDescripcion: string;
  strAdicional: string;
}