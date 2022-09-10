import { TraceCMACTModel } from "../generico/http.model";


export interface ApptransaccionPrepararDatosOut{
    codPersona: string,
    codPersonaRep: string,
    codTipoOperacion: number,
    codOperacion:number,
    codOperacionDetalle:number,
    idProducto?: number,
    cuentaOrigen:string,
    cuentaDestino:string,
    tipoMoneda: number,
    titularDestino?:string,
    monto:number,
}

export interface AppTransaccionPrepararDatosOutModel {
    pstrCodPers: string,
    pstrCodPersRep: string,
    pshrCodTipOpe: number,
    pshrCodOpe: number,
    pshrCodOpeDet: number,
    ngIdProducto?: number,
    pstrCtaOrigen: string,
    pstrDocDestino: string,
    pbytMoneda: number,
    pstrTitularDestino?: string
    pdecMonto: number,
    pobjTrace?: TraceCMACTModel
}

export interface AppTransaccionDatosInModel{
    intCodigo :string,
    strCodPers: string,
    shrCodTipOpe: number,
    shrCodOpe: number ,
    shrCodOpeDet: number,
    strCtaOrigen: string,
    trDocDestino: string

}

export interface ApptransaccionDatosOut{
    
}

export interface TransaccionDatos {
    
}