import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss']
})
export class NovaTranferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor() { }

  ngOnInit(): void {
  }

  transferir(){
    console.log('solicitada nova transferência');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
