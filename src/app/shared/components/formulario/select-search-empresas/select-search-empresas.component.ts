import { Component, forwardRef, Input, OnInit} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-search-empresas',
  templateUrl: './select-search-empresas.component.html',
  styleUrls: ['./select-search-empresas.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectSearchEmpresasComponent),
      multi: true
    }
  ]
})
export class SelectSearchEmpresasComponent implements ControlValueAccessor,OnInit {

  @Input() lista!: {
    id: string,
    name: string,
  }[];

  respaldoLista!:any[];

  public inputSearch= ""
  currentValue = "";
  isDisabled: boolean = false;

  constructor() { 
  }
  ngOnInit(): void {
    this.respaldoLista = this.lista
  }
  

  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(valueIn: any): void {
    if (valueIn) {
      this.currentValue = valueIn;
      this.changeSelect({value: valueIn});
    }
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  setNewValue(value: string) {  // metodo para enviar el nuevo valor
    this.currentValue = value;
    this.onChange(this.currentValue);
  }

  changeSelect(val: any) {
    this.setNewValue(val.value);
  }

  getEmpresas(){
    console.log("lista",this.respaldoLista)
    if(this.inputSearch.length === 0){
      this.lista = this.respaldoLista
    }else{
      console.log("valor",this.inputSearch)
    this.lista = this.respaldoLista.filter(empresa=>empresa.name.toLocaleLowerCase().includes(this.inputSearch))
    if(this.lista.length<=0){
      this.lista = [{name:"Ingrese nombre valido porfavor",id:""}]
    }
    }
    
    
  }
  


}
