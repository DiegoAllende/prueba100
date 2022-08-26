import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthReq } from '../../models/AuthReq.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data1 =  new AuthReq();

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    console.log('constructor login');
  }

  ngOnInit(): void {
    console.log('ngOnInit login');
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
