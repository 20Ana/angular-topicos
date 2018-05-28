import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTableModule, MatRadioModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { CalcMediaComponent } from './calc-media/calc-media.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { QuadradoComponent } from './quadrado/quadrado.component';
import { MaiorValorComponent } from './maior-valor/maior-valor.component';
import { MaiorIdadeComponent } from './maior-idade/maior-idade.component';
import { AlturaSexoComponent } from './altura-sexo/altura-sexo.component';
import { NomeInvertidoComponent } from './nome-invertido/nome-invertido.component';
import { ExibirDataComponent } from './exibir-data/exibir-data.component';
import { FormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    CalcMediaComponent,
    MainComponent,
    QuadradoComponent,
    MaiorValorComponent,
    MaiorIdadeComponent,
    AlturaSexoComponent,
    NomeInvertidoComponent,
    ExibirDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    MatRadioModule,
    NgxMaskModule.forRoot(),
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
