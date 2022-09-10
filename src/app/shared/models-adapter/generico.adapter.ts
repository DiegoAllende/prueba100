import { ComboModel, TipoDoiModel, TipoMonedaInModel, TipoOperadorModel } from "@shared/models/generico/generico.models";

export const adpaterComboDni = (dataIn: TipoDoiModel[]): ComboModel[] => {
  return dataIn.map(x => {
    return {
      valor: x.bytTipoDOI,
      label: x.strDOI,
    }
  });
}

export const adpaterComboOperador = (dataIn: TipoOperadorModel[]): ComboModel[] => {
  return dataIn.map(x => {
    return {
      valor: x.bytCodOperador,
      label: x.strOperador,
    }
  });
}

export const adpaterComboMoneda = (dataIn: TipoMonedaInModel[]): ComboModel[] => {
  return dataIn.map(x => {
    return {
      valor: x.strCodeMon,
      label: x.strMoneda,
    }
  });
}