import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-media',
  templateUrl: './calc-media.component.html',
  styleUrls: ['./calc-media.component.scss']
})
export class CalcMediaComponent implements OnInit {
  public notas: number = 0;
  public nota: any;
  public qtdNotas: number = 0;

  constructor() { }

  ngOnInit() {
  }

  calculaMedia() {
    this.notas += this.nota;
    this.qtdNotas ++;
    this.nota = '';
  }

}
