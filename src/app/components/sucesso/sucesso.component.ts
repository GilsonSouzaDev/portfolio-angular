import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sucesso',
  standalone: true,
  imports: [],
  templateUrl: './sucesso.component.html',
  styleUrl: './sucesso.component.scss'
})
export class SucessoComponent implements AfterViewInit {

  protected mensagem: string = "Solicitação Atendida";

  @ViewChild('container', {static: true}) container!: ElementRef<HTMLDivElement>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) 
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
