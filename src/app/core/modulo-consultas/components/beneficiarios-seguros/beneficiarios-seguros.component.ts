import { AfterViewInit } from '@angular/core';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficiarios-seguros',
  templateUrl: './beneficiarios-seguros.component.html',
  styleUrls: ['./beneficiarios-seguros.component.scss']
})
export class BeneficiariosSegurosComponent implements OnInit, OnDestroy, AfterViewInit {
  seguro = {
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
  showBeneficiarios: boolean;

  constructor() {
    this.showBeneficiarios = true
  }

  ngOnInit(): void {
    console.log("se inicia cada vez", this.showBeneficiarios)
    this.showBeneficiarios = true
  }

  openAcordeon() {
    this.showBeneficiarios = !this.showBeneficiarios
  }

  getName(beneficiado: any) {
    const part = beneficiado.split(' ')
    return `${part[0]} ${part[1]}`
  }

  getLastName(beneficiado: any) {
    const part = beneficiado.split(' ')
    return `${part[2]} ${part[3]}`
  }
  ngOnDestroy(): void {
    this.showBeneficiarios = true
  }

  ngAfterViewInit(): void {
    this.showBeneficiarios = true
  }
}
