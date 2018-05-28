import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  questoes: Array<any> = [
    {
      rota: 'media',
      nome: 'Calcular Media'
    },
    {
      rota: 'quadrado',
      nome: 'Imprimir Quadrado'
    },
    {
      rota: 'maior-valor',
      nome: 'Imprimir Maior Valor'
    },
    {
      rota: 'maior-idade',
      nome: 'Maior de Idade'
    },
    {
      rota: 'sexo-altura',
      nome: 'Altura & Sexo'
    },
    {
      rota: 'nome-invertido',
      nome: 'Nome Invertido'
    },
    {
      rota: 'data',
      nome: 'Exibir Data'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
