import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnimationsService } from '../../services/animations.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,  MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
  
  @ViewChild('angularIcon', {static: true}) angularIcon!: ElementRef<HTMLDivElement>
  @ViewChild('divH', {static: true}) divH!: ElementRef<HTMLDivElement>
  @ViewChild('container', {static: true}) container!: ElementRef<HTMLDivElement>;


  constructor(private animationService: AnimationsService){}
  
  protected animation = this.animationService.aplicarAnimacaoApresentacao;
  
  ngAfterViewInit(): void {
    this.animation(this.angularIcon.nativeElement,this.container.nativeElement, 2, 1,-100)
    this.animation(this.divH.nativeElement,this.container.nativeElement, 2, 1 , 100,)    
  }

  

}
