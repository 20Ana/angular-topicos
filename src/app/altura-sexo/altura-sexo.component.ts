import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altura-sexo',
  templateUrl: './altura-sexo.component.html',
  styleUrls: ['./altura-sexo.component.scss']
})
export class AlturaSexoComponent implements OnInit {
  public qtdHomens: number = 0;
  public qtdMulheres: number = 0;
  public maiorAltura: number = 0;
  public sexoMaiorAltura: string;
  public altura: any;
  public sexo: string;
  public qtd: number = 5;

  constructor() { }

  ngOnInit() {
  }

  inserirValores(){
    this.qtd --;
    if(this.altura > this.maiorAltura){
      this.maiorAltura = this.altura;
      this.sexoMaiorAltura = this.sexo;
    }

    if(this.sexo == 'F'){
      this.qtdMulheres ++;
      this.sexo = '';
      this.altura = '';
    }else{
      this.qtdHomens ++;
      this.sexo = '';
      this.altura = '';
    }
  }
}
