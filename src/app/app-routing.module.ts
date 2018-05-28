import { MaiorIdadeComponent } from './maior-idade/maior-idade.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcMediaComponent } from './calc-media/calc-media.component';
import { MainComponent } from './main/main.component';
import { QuadradoComponent } from './quadrado/quadrado.component';
import { MaiorValorComponent } from './maior-valor/maior-valor.component';
import { AlturaSexoComponent } from './altura-sexo/altura-sexo.component';
import { NomeInvertidoComponent } from './nome-invertido/nome-invertido.component';
import { ExibirDataComponent } from './exibir-data/exibir-data.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'media',
        component: CalcMediaComponent
      },
      {
        path: 'quadrado',
        component: QuadradoComponent
      },
      {
        path: 'maior-valor',
        component: MaiorValorComponent
      },
      {
        path: 'maior-idade',
        component: MaiorIdadeComponent
      },
      {
        path: 'sexo-altura',
        component: AlturaSexoComponent
      },
      {
        path: 'nome-invertido',
        component: NomeInvertidoComponent
      },
      {
        path: 'data',
        component: ExibirDataComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
