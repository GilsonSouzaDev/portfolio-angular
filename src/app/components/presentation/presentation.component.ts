import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AnimationsService } from '../../services/animations.service';


@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent implements AfterViewInit{


  @ViewChild('imagemPresent', {static: true}) imagemPresent!: ElementRef<HTMLDivElement>
  @ViewChild('container', {static: true}) container!: ElementRef<HTMLDivElement>;

  @ViewChild('nome', {static: true}) nome!: ElementRef<HTMLDivElement>
  @ViewChild('sobrenome', {static: true}) sobrenome!: ElementRef<HTMLDivElement>
  @ViewChild('linkedin', {static: true}) linkedin!: ElementRef<HTMLDivElement>
  @ViewChild('telegram', {static: true}) telegram!: ElementRef<HTMLDivElement>
  @ViewChild('whats', {static: true}) whats!: ElementRef<HTMLDivElement>
  @ViewChild('github', {static: true}) github!: ElementRef<HTMLDivElement>

  constructor(private animationService: AnimationsService){}
  
  protected animation = this.animationService.aplicarAnimacaoApresentacao;
  
  
  
  ngAfterViewInit(): void {

    this.animation(this.imagemPresent.nativeElement, this.container.nativeElement, 3, 1, -100)

    this.animation(this.nome.nativeElement,this.container.nativeElement, 1, 1, 100)
    this.animation(this.sobrenome.nativeElement,this.container.nativeElement, 2, 1, 100)
    this.animation(this.linkedin.nativeElement,this.container.nativeElement, 3, 1, 100)
    this.animation(this.telegram.nativeElement,this.container.nativeElement, 4, 1, 100)
    this.animation(this.whats.nativeElement,this.container.nativeElement, 5, 1, 100)
    this.animation(this.github.nativeElement,this.container.nativeElement, 6, 1, 100)
    
  }

  abrirLinkedin(){
    window.open(`https://www.linkedin.com/in/gilsonsouza-dev/`,'_blank');
  }


  abrirWhatsApp() {
    // Substitua 'seu_numero_de_telefone' pelo seu número de telefone com código do país
    const numeroTelefone = '55011947799976';
    const mensagemInicial = 'Estou aqui pelo seu portifólio';
    window.open(`https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagemInicial)}`, '_blank');
  }

  abrirTelegram() {
    const nomeUsuario = 'gilsonsouzadev';
    const mensagemInicial = 'Estou aqui pelo seu portfólio';

    // Tente abrir o aplicativo Telegram primeiro usando o protocolo "tg://"
    const url = `tg://msg?text=${encodeURIComponent(mensagemInicial)}&to=${nomeUsuario}`;
    window.location.href = url;

    // Se o protocolo "tg://" não funcionar, abra o link da web
    setTimeout(() => {
        window.open(`https://t.me/${nomeUsuario}?start=${encodeURIComponent(mensagemInicial)}`, '_blank');
    }, 500);
}


  
  abrirGitHub(){
    window.open(`https://github.com/GilsonSouzaDev`,'_blank');
  }

  



}
