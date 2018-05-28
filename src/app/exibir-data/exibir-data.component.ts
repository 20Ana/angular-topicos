import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibir-data',
  templateUrl: './exibir-data.component.html',
  styleUrls: ['./exibir-data.component.scss']
})
export class ExibirDataComponent implements OnInit {
  public date: string;
  public res: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit() {
  }

  splitData(){
    this.res = this.date.split("-");
    this.date = '';
  }
}
