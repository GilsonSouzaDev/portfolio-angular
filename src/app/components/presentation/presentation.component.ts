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

}
