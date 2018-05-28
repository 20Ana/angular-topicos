import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maior-valor',
  templateUrl: './maior-valor.component.html',
  styleUrls: ['./maior-valor.component.scss']
})
export class MaiorValorComponent implements OnInit {
  public numeros: Array<number> = new Array<number>();
  public numero: any;
  public maior: number = 0;
  public qtd: number = 5;
  constructor() { }

  ngOnInit() {
  }

  maiorNumero(){
    this.qtd --;
    this.numeros.push(this.numero);
    if(this.numero > this.maior){
      this.maior = this.numero;
    }
    this.numero = '';
  }

}
