import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MicrosegurosService } from '@shared/services/microseguros.service';
import { adapterSeguroCliente, adapterSeguroDatos } from '../../models-adapter/microseguro.adapter';
import { SeguroDatosAll } from '../../models/microseguro.interface';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.scss']
})
export class SegurosComponent implements OnInit {
  isSeguro: boolean = true;
  listaSegurosAll: SeguroDatosAll[] = [];

  constructor(
    private router: Router,
    private microsegurosService: MicrosegurosService,
  ) {}

  ngOnInit(): void {
    this.getSeguros();
  }

  getSeguros() {
    const params = { pstrCodPers: "4900127272" };
    this.microsegurosService.getCreditosClienteListar(params).subscribe(resp => {
      this.listaSegurosAll = adapterSeguroCliente(resp);
      if (this.listaSegurosAll.length === 0) {
        this.isSeguro = false;
      } else {
        const aux = this.listaSegurosAll.find(y => y.seguro.active);
        if(aux) this.btnCard(aux);
      }
    }, error => {
      console.log("**error**: ", error);
    });
  }

  getCreditoDatos(codSeguro: string) {
    const params = { pstrCodPers: "4900127272", pstrCodSeguro: codSeguro };
    return this.microsegurosService.getSeguroDatosObtener(params);
  }

  btnCard(item: SeguroDatosAll) {
    this.listaSegurosAll.forEach(x => x.seguro.active = false);
    item.seguro.active = true;

    this.getCreditoDatos(item.seguro.numSeguro).subscribe(resp => {
      if (resp) item.datos = adapterSeguroDatos(resp);
    }, error => {
      console.log("**error**: ", error);
    });
  }

  btnRegresar() {
    this.router.navigate(["/main"]);
  }

  btnPagar() {
    console.log("pagar seguro");
  }

}
