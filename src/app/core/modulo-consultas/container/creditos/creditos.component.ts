import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss'],
})
export class CreditosComponent implements OnInit {
  isCredito: boolean = true;
  listCreditos: any = [];

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getCreditos();
  }

  getCreditos() {
    this.isCredito = true;

    this.listCreditos = [
      {
        title: "Administrativo",
        active: true,
        numero: '44475847293',
        saldo: "45,645.28",
      },
      {
        title: "Gestion",
        active: false,
        numero: '553748374839',
        saldo: "55,645.28",
      }
    ]
  }

  btnCard(item: any) {
    this.listCreditos.forEach((x:any) => x.active = false);
    item.active = true;
  }

  btnRegresar() {
    this.router.navigate(["/main"]);
  }

  btnPagar() {
    console.log("pagar credito");
  }

}
