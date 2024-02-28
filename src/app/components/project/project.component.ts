import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AnimationsService } from '../../services/animations.service';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements AfterViewInit{

@ViewChild('cardAnimation1') cardAnimation1!: ElementRef<HTMLDivElement>;
@ViewChild('cardAnimation2') cardAnimation2!: ElementRef<HTMLDivElement>;
@ViewChild('cardAnimation3') cardAnimation3!: ElementRef<HTMLDivElement>;
@ViewChild('cardAnimation4') cardAnimation4!: ElementRef<HTMLDivElement>;
@ViewChild('container', {static: true}) container!: ElementRef<HTMLDivElement>;


protected animation = this.animationService.aplicarAnimacao;

protected card1 = this.cardService.card[0];
protected card2 = this.cardService.card[1];
protected card3 = this.cardService.card[2];
protected card4 = this.cardService.card[3];

constructor(
  private animationService: AnimationsService,
  private cardService: CardService
){}
  
ngAfterViewInit(): void {
    this.animation(this.cardAnimation1.nativeElement, this.container.nativeElement, 4, 10, -100);
    this.animation(this.cardAnimation2.nativeElement, this.container.nativeElement, 6, 10, 100);
    this.animation(this.cardAnimation3.nativeElement, this.container.nativeElement, 4, 10, -100);
    this.animation(this.cardAnimation4.nativeElement, this.container.nativeElement, 6, 10, 100);
}


}






