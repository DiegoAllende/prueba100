import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  terminoSesion$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  terminarSesionObs$(): Observable<boolean> {
    return this.terminoSesion$.asObservable();
  }

  setTerminoSesion(val: boolean) {
    this.terminoSesion$.next(val);
  }

  irLogin() {
    this.router.navigate(["/auth"]);
  }
}
