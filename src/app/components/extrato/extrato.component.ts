import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia.service';

import { Transferencia } from 'src/app/models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[] = [];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[])=> {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

}
