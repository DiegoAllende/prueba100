import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditosService } from '@shared/services/creditos.service';
import { adapterCreditoDatos, adapterCreditosCliente } from '../../models-adapter/creditos.adapter';
import { CreditoCliente, CreditoDatosAll } from '../../models/creditos.interface';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss'],
})
export class CreditosComponent implements OnInit {
  isCredito: boolean = true;
  listCreditosAll: CreditoDatosAll[] = [];

  constructor(
    private router: Router,
    private creditosService: CreditosService,
  ) { }

  ngOnInit(): void {
    this.getCreditos();
  }

  getCreditos() {
    const params = { pstrCodPers: "4900127272" };
    this.creditosService.getCreditosClienteListar(params).subscribe(resp => {
      this.listCreditosAll = adapterCreditosCliente(resp);
      if (this.listCreditosAll.length === 0) {
        this.isCredito = false;
      } else {
        const aux = this.listCreditosAll.find(y => y.credito.active);
        if(aux) this.btnCard(aux);
      }
    }, error => {
      console.log("**error**: ", error);
    });
  }

  getCreditoDatos(codCuenta: string) {
    const params = { pstrCodPers: "4900127272", pstrCodCta: codCuenta };
    return this.creditosService.getCreditosDatosObtener(params);
  }

  btnCard(item: CreditoDatosAll) {
    this.listCreditosAll.forEach((x) => x.credito.active = false);
    item.credito.active = true;

    this.getCreditoDatos(item.credito.numCuenta).subscribe(resp => {
      if (resp) item.datos = adapterCreditoDatos(resp);
    }, error => {
      console.log("**error**: ", error);
    });
  }

  btnRegresar() {
    this.router.navigate(["/main"]);
  }

  btnPagar() {
    console.log("pagar credito");
  }

}
