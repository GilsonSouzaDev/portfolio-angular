import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Icone } from '../../interfaces/Icone';
import { Skill } from '../../interfaces/Skill';
import { gsap } from 'gsap';
import { IconsService } from '../../services/icons.service';
import { SkillsService } from '../../services/skills.service';
import { AnimationsService } from '../../services/animations.service';



@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit{
  
  
  protected icones = this.iconsService.icons;
  protected skills = this.skillService.skill;
  protected animation = this.animationService.aplicarAnimacao;
  protected animation2 = this.animationService.aplicarAnimacaoSkills;
  

  @ViewChildren('buttons') buttons!: QueryList<ElementRef>;
  @ViewChild('iconesAnimation', {static: true}) iconesAnimation!: ElementRef<HTMLDivElement>
  @ViewChild('container', {static: true}) container!: ElementRef<HTMLDivElement>
  @ViewChild('imagemSkill', {static: true}) imagemSkill!: ElementRef<HTMLDivElement>

  constructor(private iconsService: IconsService,
              private skillService: SkillsService,
              private animationService: AnimationsService
            )
  {

  }

ngAfterViewInit(): void {
  setTimeout(() => {
    this.animation(this.iconesAnimation.nativeElement, this.container.nativeElement, 2.5, 1, -100);
  }, 100);
}
  
protected invocarAnimacao(){
    this.buttons.toArray().forEach((button, index) => {
    this.animation2(button.nativeElement, this.container.nativeElement, 1, index + 1, 0, 100, 0, 0);
  }); 
}


protected resetAnimacao(): void {
    const buttonsLength = this.buttons.length;
    this.buttons.forEach((button, index) => {
      gsap.to(button.nativeElement, {
        y: 0,
        x: 0,
        opacity: 0,
        onComplete: () => {
          if (index === buttonsLength - 1) {
            // Chama a animação após o término da animação de reset
            this.invocarAnimacao();
          }
        }
      });
    }); 
}
 
cardAtual: Skill = {
  "titulo": "",
  "conhecidas": new Map([["", ""]]),
  "estudadas": new Map([["", ""]])
};

protected botaoClicado(nomeBotao: string){
    for (let index = 0; index < this.skills.length; index++) {
      if(this.skills[index].titulo === nomeBotao ){
        this.cardAtual = this.skills[index];
        setTimeout(() => {
          this.resetAnimacao();  
        }, 1000);               
        break
      }    
    }       
}


}
