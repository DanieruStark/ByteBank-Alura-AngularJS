import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { Routes } from "@angular/router";
import { ExtratoComponent } from "./components/extrato/extrato.component";
import { NovaTranferenciaComponent } from "./components/nova-tranferencia/nova-tranferencia/nova-tranferencia.component";

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: NovaTranferenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{}