import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AnimationsService } from '../../services/animations.service';



@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatIconModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  @ViewChild('conteudo', {static: true}) conteudo!: ElementRef<HTMLDivElement>
  @ViewChild('imagemConteudo', {static: true}) imagemConteudo!: ElementRef<HTMLDivElement>
  @ViewChild('container', {static: true}) container!: ElementRef<HTMLDivElement>;

  constructor(private animationService: AnimationsService){}
  
  protected animation = this.animationService.aplicarAnimacaoSobre;
  
  ngAfterViewInit(): void {
    this.animation(this.conteudo.nativeElement,this.container.nativeElement, 2.5 , 1, -100)
    this.animation(this.imagemConteudo.nativeElement,this.container.nativeElement, 2.5, 1 , 100)    
  }

  

}
