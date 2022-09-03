import { Component, OnInit } from '@angular/core';
import { adpaterComboDni, adpaterComboOperador } from '@shared/models-adapter/generico.adapter';
import { ComboModel } from '@shared/models/generico/generico.models';
import { GenericoService } from '@shared/services/generico.service';
import { PASOS } from '@utils/constantes';

@Component({
  selector: 'app-gen-password',
  templateUrl: './gen-password.component.html',
  styleUrls: ['./gen-password.component.scss']
})
export class GenPasswordComponent implements OnInit {
  listaTiposDoi: ComboModel[] = [];
  listaTiposOperador: ComboModel[] = [];

  PASOS = PASOS;
  numeroPaso: number = PASOS.INI;

  value = {
    numeroTarjeta: "",
    numeroDocumento: "",
    numeroOperador: "",
    tipoDocumento: 1,
    tipoOperadora: 1,
  };

  constructor(
    private genericoService: GenericoService
  ) { }

  ngOnInit(): void {
    this.getTiposDoiServ();
    this.getTiposOperadorServ();
  }

  //SERVICIOS
  getTiposDoiServ() {
    this.genericoService.getTipoDoiListar(1).subscribe(resp => {
      this.listaTiposDoi = adpaterComboDni(resp);
    });
  }

  getTiposOperadorServ() {
    this.genericoService.getTipoOperadorListar().subscribe(resp => {
      this.listaTiposOperador = adpaterComboOperador(resp);
    });
  }

  btnRegresar1() {
    this.numeroPaso = PASOS.INI;
  }

  btnSiguiente1() {
    this.numeroPaso = PASOS.DOS;
  }

  btnRegresar2() {
    this.numeroPaso = PASOS.INI;
  }

  btnSiguiente2() {
    this.numeroPaso = PASOS.FIN;
  }

}
