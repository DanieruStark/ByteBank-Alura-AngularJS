import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss']
})
export class NovaTranferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir(){
    console.log('solicitada nova transferência');
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error)
    );
    
    
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
