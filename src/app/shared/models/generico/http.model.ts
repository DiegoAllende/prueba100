export interface ResponseModel<T> {
  isSuccess: boolean;
  message: string;
  messageCode: number | null;
  messageType: number | null;
  data: T
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