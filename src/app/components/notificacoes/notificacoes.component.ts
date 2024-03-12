import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-notificacoes',
  standalone: true,
  imports: [],
  templateUrl: './notificacoes.component.html',
  styleUrl: './notificacoes.component.scss'
})
export class NotificacoesComponent implements AfterViewInit{

@ViewChild('container', {static: true}) container!: ElementRef<HTMLDivElement>;

protected mensagem: string = "Solicitação Negada";

constructor(@Inject(MAT_DIALOG_DATA) public data: string,
            ) 
{

}

ngAfterViewInit() {
  // Define um tempo limite de 3 segundos após a inicialização do componente
  setTimeout(() => {
    // Verifica se o contêiner ainda está presente antes de tentar removê-lo
    if (this.container && this.container.nativeElement) {
      this.container.nativeElement.remove();
    }
  }, 5000);
}

}

