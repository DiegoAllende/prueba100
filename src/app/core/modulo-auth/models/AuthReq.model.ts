export class AuthReq {
  pbytTipAut: number;
  pstrTarjeta: string;
  pstrClave: string;
  pbytTipDOI: number;
  pstrDOI: string;
  pstrIP: string;
  pobjTrace!: object;

  constructor() {
    this.pbytTipAut = 0;
    this.pstrTarjeta = "";
    this.pstrClave = "";
    this.pbytTipDOI = 0;
    this.pstrDOI = "";
    this.pstrIP = "";
    // this.pobjTrace = {};
  }
}