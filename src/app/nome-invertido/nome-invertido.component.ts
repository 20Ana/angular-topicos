import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nome-invertido',
  templateUrl: './nome-invertido.component.html',
  styleUrls: ['./nome-invertido.component.scss']
})
export class NomeInvertidoComponent implements OnInit {
  public nomes: Array<string> = new Array<string>();
  public nome: string;

  constructor() { }

  ngOnInit() {
  }

  nomesInvertidos(){
    this.nomes.push(this.nome);
    this.nomes.reverse();
  }
}
