import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContadorService } from './contador.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit, OnDestroy {
  @Input() tiempoSeg: number = 0;
  @Input() mensaje: string = "El tiempo se terminará";
  @Input() type!:number;

  timeInterval: any;
  timeTimeout: any;
  tiempoAux = 0;

  valObs!: Subscription;

  constructor(private contadorService: ContadorService) {
    this.valObs = this.contadorService.terminarSesionObs$().subscribe(resp => {
      if(resp) {
        this.cancelarTimeOut();
        this.cancelarInterval();
        this.contadorService.setTerminoSesion(false);
        this.contadorService.irLogin();
      } else {
        this.cancelarTimeOut();
        this.cancelarInterval();
        this.tiempoAux = this.tiempoSeg;
        this.contador();
      }
    });
  }

  ngOnInit(): void {
    this.tiempoAux = this.tiempoSeg;
  }

  ngOnDestroy(): void {
    this.cancelarTimeOut();
    this.cancelarInterval();
    this.valObs.unsubscribe();
  }

  contador() {
    this.timeTimeout = setTimeout(() => {
      this.timeInterval = setInterval(() => {
        this.tiempoAux--
        if(this.tiempoAux <= 0) {
          this.contadorService.setTerminoSesion(true);
        }
      }, 1000);
    }, 5000);
  }

  cancelarInterval() {
    clearInterval(this.timeInterval);
  }

  cancelarTimeOut() {
    clearTimeout(this.timeTimeout);
  }

}
