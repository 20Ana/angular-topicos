import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maior-idade',
  templateUrl: './maior-idade.component.html',
  styleUrls: ['./maior-idade.component.scss']
})
export class MaiorIdadeComponent implements OnInit {
  public idade: any;
  public qtdMenores: number = 0;
  public qtdMaiores: number = 0;

  constructor() { }

  ngOnInit() {
  }

  maiorIdade(){
    if (this.idade >= 18) {
      this.qtdMaiores ++;
    } else {
      this.qtdMenores ++;
    }
    this.idade = '';
  }
}
