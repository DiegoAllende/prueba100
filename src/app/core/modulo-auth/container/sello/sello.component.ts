import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sello',
  templateUrl: './sello.component.html',
})
export class SelloComponent implements OnInit {
  iconNombre = "";

  constructor(private router: Router) {
    if(window.history.state?.data) {
      this.iconNombre = window.history.state?.data.sello;
    } else {
      this.router.navigate(["/auth"]);
    }
  }

  ngOnInit(): void {
    console.log("init sello");
  }

  btnRespuesta(data: boolean) {
    if(data) {
      this.router.navigate(["/auth/clave"], {state: {"data": {sello: this.iconNombre}}});
    } else {
      this.router.navigate(["/auth"]);
    };
  }

}
