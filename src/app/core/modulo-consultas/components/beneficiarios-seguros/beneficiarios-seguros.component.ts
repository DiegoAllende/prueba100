import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-beneficiarios-seguros',
  templateUrl: './beneficiarios-seguros.component.html',
  styleUrls: ['./beneficiarios-seguros.component.scss']
})
export class BeneficiariosSegurosComponent implements OnInit,OnDestroy,AfterViewInit {

  public showBeneficiarios:boolean;
  @Input() seguro!:any

  constructor(private renderer: Renderer2) {
    this.showBeneficiarios = true
   }

  ngOnInit(): void {
    console.log("se inicia cada vez",this.showBeneficiarios)
    this.showBeneficiarios = true
  }

  openAcordeon() {
    this.showBeneficiarios = !this.showBeneficiarios
  }

  getName(beneficiado:any){
    const part = beneficiado.split(' ')
    return `${part[0]} ${part[1]}`
  }

  getLastName(beneficiado:any){
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
