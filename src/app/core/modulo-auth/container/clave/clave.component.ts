import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clave',
  templateUrl: './clave.component.html',
  styleUrls: ['./clave.component.scss']
})
export class ClaveComponent implements OnInit {
  iconNombre = "";
  isTieneSello = false;

  constructor(private router: Router) {
    if(window.history.state?.data) {
      this.iconNombre = window.history.state?.data.sello;
    } else {
      this.router.navigate(["/auth"]);
    }
  }

  ngOnInit(): void {
    console.log("init clave");
  }
  
  vlidarClave(val: number) {
    console.log("val clave: ", val);
  }

  ingresarClave() {
    if(this.isTieneSello) {
      this.router.navigate(["/main"]);
    } else {
      this.router.navigate(["/auth/generar/sello"]);
    }
  }

  btnOlvideCalve() {
    this.router.navigate(["/auth/generar/olvide-clave"]);
  }

}
