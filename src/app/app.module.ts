import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTranferenciaComponent } from './components/nova-tranferencia/nova-tranferencia/nova-tranferencia.component';
import { ExtratoComponent } from './components/extrato/extrato.component';

@NgModule({
  declarations: [
    AppComponent,
    NovaTranferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
