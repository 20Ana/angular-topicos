import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.scss']
})
export class QuadradoComponent implements OnInit {
  public numeros: Array<any> = new Array<any>();
  public numero: any;
  public qtd: number = 5;
  constructor() { }

  ngOnInit() {
  }

  inserirNumero(){
    this.numeros.push({valorInserido: this.numero, quadrado: Math.pow(this.numero, 2)});
    this.qtd --;
    this.numero = '';
    console.log(this.numeros);
  }
}
