import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.scss']
})
export class SegurosComponent implements OnInit {
  isSeguro: boolean = true;
  seguros!: any[];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSeguros();
  }

  getSeguros() {
    this.isSeguro = true;

    this.seguros = [
      {
        title: "Siempre protegido",
        active: true,
        numero: '36475847293',
        beneficiarios: [
          {
            nombre: 'Carlos Juan Perez Loayza',
            parentesco: 'Hijo',
            dni: '25454545',
            participacion: '10%'
          }, {
            nombre: 'Piero Andre Quispe Rodriguez',
            parentesco: 'Hijo',
            dni: '25454545',
            participacion: '10%'
          }
        ]
      },
      {
        title: "Proteccion Accidental",
        active: false,
        numero: '783748374839',
        beneficiarios: [
          {
            nombre: 'Carmen Alva Duran Perez',
            parentesco: 'Hija',
            dni: '787876',
            participacion: '20%'
          },
          {
            nombre: 'Juan Carlos Benavides Tenorio',
            parentesco: 'Hija',
            dni: '787876',
            participacion: '20%'
          }
        ]
      }
    ]
  }

  toReceiveIndexSecure(index: number) {
    this.seguros.filter(
      (data: any, i: number) => i !== index && data.active
    ).forEach((item: any) => {
      item.active = !item.active
    });
    this.seguros[index].active = !this.seguros[index].active;
  }

  btnCard(item: any) {
    this.seguros.forEach(x => x.active = false);
    item.active = true;
  }

  btnRegresar() {
    this.router.navigate(["/main"]);
  }

  btnPagar() {
    console.log("pagar seguro");
  }

}
