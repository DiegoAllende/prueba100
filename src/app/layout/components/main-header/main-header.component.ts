import { Component, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ItemMenuDesktopComponent } from '../main-menu-desktop/item-menu-desktop/item-menu-desktop.component';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit,OnDestroy {

  public showMenu:boolean = false
  @ViewChild('childMenu') public childMenu:any;

  constructor() { 
  }

  data: any = [{
    active:false,
    title: "Mis Productos",
    icon: 'keyboard_arrow_down',
    items:
      [
        { subtitle: "Ahorros",icon:'assets/icons/billetera-wite.svg', ruta: '/main' },
        { subtitle: "Créditos",icon:"assets/icons/credito-white.svg", ruta: '/main/consultas/creditos' },
        { subtitle: "Seguros",icon: "assets/icons/escudo-seguro.svg",ruta: '/main/consultas/seguros' }
      ]
  },
  {
    active:false,
    title: "Te Ofrecemos",
    icon:'keyboard_arrow_down',
    items:
      [
      ]
  }, {
    active:false,
    title: "Favoritos",
  },
  {
    active:false,
    title: "Cerrar Sesion",
  }
  ];

  ngOnInit(): void {
  }

  changeShowMenu(){
    this.showMenu = !this.showMenu
    if(this.showMenu){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto"
    }
  }

  closeMenu(){
    this.showMenu = false
    
    if(!this.showMenu){
    document.body.style.overflow = "auto"}
  }

  toggle(index: number) {
      this.data.filter(
        (data:any, i:number) => i !== index && data.active
      ).forEach((item:any) => item.active = !item.active);
    this.data[index].active = !this.data[index].active;
}

changeSelected(indice:number){
  this.toggle(indice)
}

closeAll(value:boolean){
  this.data =  this.data.map((item:any) =>{ return {...item,active:value}})
  console.log(this.data)
}

ngOnDestroy(): void {
  document.body.style.overflow = "auto"
}

closeSubmenu(){
 this.data =  this.data.map((item:any)=>{
  return{
    ...item,
    active: false
  }
 })
}
}


