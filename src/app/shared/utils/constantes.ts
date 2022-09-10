export class Constantes {
  //constantes para el local strorage
  public static LS_NUM_TARJETA = "rcbkt";
  public static TOKEN_ACCESS = "token_access";
  public static PROFILE_DATA = "profileData";
  public static SELLO_ACTUAL = "YUTYTUYUTTY";
  //PIN TARJETA
  public static PIN = "444686";
  public static PIN_MASK = "4446-86";
  /* --------MENSAJES------- */
  // MENSAJES VALIDACIONES
  public static MSJ_CLAVES_DIF = "las claves deben ser iguales. Vuelva a ingresar las claves, por favor.";
  // MENSAJES HTTP
  public static MSJ_ERROR_DESCONOCIDO = "Ocurrió algo inesperado. Vuelva a intentar.";
  //MENSAJES UI
  public static MSJ_INFO_SIN_TARJETA = "Para el uso de clientes que solo cuenten con depósito a plazo fijo y/o créditos";

}

export enum PASOS {
  INI = 1,
  DOS = 2,
  TRES = 3,
  CUATRO = 4,
  FIN = 99,
}

export enum TIPO_AUTH {
  CON_CARD = 1,
  SIN_CARD = 2,
}

export enum TIPO_PERSONA {
  NATURAL = 1,
  JURIDICA = 2,
}

export enum ESTADOS_CUOTA {
  VIGENTE = "Vigente",
  VENCIDA = "Vencida",
  CANCELADA = "Cancelada",
}

export enum ROLES {
  CON_CARD = "customer.card",
  SIN_CARD = "customer.nocard",
  LISTA_NEGRA_NO = "customer.noblacklist",
  LISTA_NEGRA_SI = "customer.blacklist",
  BLOQUEO_TEMP_NO = "customer.noblocktemp",
  BLOQUEO_TEMP_SI = "customer.blocktemp",
}