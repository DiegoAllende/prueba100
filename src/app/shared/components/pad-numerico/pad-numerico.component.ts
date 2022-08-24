import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-pad-numerico',
  templateUrl: './pad-numerico.component.html',
  styleUrls: ['./pad-numerico.component.scss']
})
export class PadNumericoComponent implements OnInit {

  @Input() title:string= ''
  @Input() valueDigits:number = 0
  @Output() valueCod: EventEmitter<number> = new EventEmitter();

  public listNumbers: number[] = []
  public arrayInput:string[] =[]
  public valueInput:string = ''

  ngOnInit(): void {

    let array:number[] = []

    array.length = 1

    while(array.length > 0 && array.length < 11 ){
      let number = this.getRandomInt(0,9)
      if(array.includes(number)){
        array = [...array]
      }else{
        if(number !== undefined){
        array.push(number)}
      }
    }
    this.listNumbers = array.slice(array.length-10)
  }


  getValueSelected(itemSelected:any){
    if(this.arrayInput.length === this.valueDigits) return;
    this.arrayInput.push(itemSelected)
    this.valueInput = this.replaceAll(this.arrayInput.toString(),',','')
    if(this.valueInput.length === this.valueDigits) this.valueCod.emit(parseInt(this.valueInput));
  }

  deleteLastInput(){
    this.valueCod.emit(0)
    this.arrayInput.pop()
    this.valueInput = this.replaceAll(this.arrayInput.toString(),',','')
  }

  deleteAllInput(){
    this.valueCod.emit(0)
    this.arrayInput = []
    this.valueInput = ''
  }

  replaceAll( text:string, busca:string, reemplaza:string ){
    while (text.toString().indexOf(busca) != -1){
    text = text.toString().replace(busca,reemplaza);}
    return text;
  }

getRandomInt(min:number, max:number):number {
  let byteArray = new Uint8Array(1);
  window.crypto.getRandomValues(byteArray);

  let range = max - min + 1;
  let max_range = 256;
  if (byteArray[0] >= Math.floor(max_range / range) * range)
      return this.getRandomInt(min, max);
  return min + (byteArray[0] % range);
}

}
