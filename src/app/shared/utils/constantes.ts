export class Constantes {
    //constantes para el local strorage
    public static LS_NUM_TARJETA = "rcbkt";
    public static TOKEN_ACCESS = "token_access";
    public static PROFILE_DATA = "profileData";
    //PIN TARJETA
    public static PIN = "444686";
    public static PIN_MASK = "4446-86";
    //
    
  }
  
  export enum PASOS {
    INI = 1,
    DOS = 2,
    TRES = 3,
    CUATRO = 4,
    FIN = 99,
  }
  
  export enum ESTADOS_CUOTA {
    VIGENTE = "Vigente",
    VENCIDA = "Vencida",
    CANCELADA = "Cancelada",
  }