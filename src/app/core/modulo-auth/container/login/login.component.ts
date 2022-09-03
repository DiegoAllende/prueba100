import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adpaterComboDni } from '@shared/models-adapter/generico.adapter';
import { ComboModel } from '@shared/models/generico/generico.models';
import { GenericoService } from '@shared/services/generico.service';
import { AuthReq } from '../../models/AuthReq.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  listaTiposDoi: ComboModel[] = [];

  data1 =  new AuthReq();

  constructor(
    private router: Router,
    private genericoService: GenericoService,
    private authService: AuthService
  ) {
    console.log('constructor login');
  }

  ngOnInit(): void {
    this.getTiposDoiServ();
  }

  //SERVICIOS
  getTiposDoiServ() {
    this.genericoService.getTipoDoiListar(1).subscribe(resp => {
      this.listaTiposDoi = adpaterComboDni(resp);
    });
  }

  authServices() {
    this.authService.autenticarServ(this.data1).subscribe(resp => {
      console.log("datrespa: ", resp);
      this.router.navigate(["auth", "sello"], { state: { "data": { sello: "Shape.svg" } } });
    });
  }

  ingresar(data: any) {

    this.authServices();
  }

  ingresarSin(data: any) {
    this.router.navigate(["main"]);
  }

}
