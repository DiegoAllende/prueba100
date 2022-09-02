import { AfterViewInit } from '@angular/core';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SeguroBeneficiario } from '../../models/microseguro.interface';

@Component({
  selector: 'app-beneficiarios-seguros',
  templateUrl: './beneficiarios-seguros.component.html',
  styleUrls: ['./beneficiarios-seguros.component.scss']
})
export class BeneficiariosSegurosComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() lista: SeguroBeneficiario[] | undefined = [];
  
  showBeneficiarios: boolean;

  constructor() {
    this.showBeneficiarios = true
  }

  ngOnInit(): void {
    this.showBeneficiarios = true;
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
