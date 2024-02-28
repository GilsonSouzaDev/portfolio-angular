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


  constructor(private animationService: AnimationsService,
              private el: ElementRef
             )
  {

  }
  
  protected animation = this.animationService.aplicarAnimacaoApresentacao;
  
  ngAfterViewInit(): void {
    this.animation(this.angularIcon.nativeElement,this.container.nativeElement, 2, 1,-100)
    this.animation(this.divH.nativeElement,this.container.nativeElement, 2, 1 , 100,)    
  }

  ngOnInit(): void {}

  navigateToHeader() { 
    this.scrollToComponent('app-header');
  }

  navigateToSobreMim() {
    this.scrollToComponent('sobremim');
  }

  navigateToSkills(){
    this.scrollToComponent('skills');
  }

  navigateToProject(){
    this.scrollToComponentProject('project');
  }

  navigateToContact(){
    this.scrollToComponent('contact');
  }



  // Adicione mais métodos de navegação conforme necessário

  private scrollToComponent(componentId: string) {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private scrollToComponentProject(componentId: string) {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  

}
