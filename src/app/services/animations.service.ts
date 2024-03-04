import { ElementRef, Injectable } from '@angular/core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() { }


aplicarAnimacao(elemento: HTMLElement,
  section: HTMLElement,
  duracao: number,
  delayMultiplier: number,
  posicaoInicialX: number
): void {

gsap.from(elemento, {
  x: posicaoInicialX,
  opacity: 0,
  duration: duracao,
  ease: 'elastic.out(1, 1)',
  delay: 0.5 * delayMultiplier,
    scrollTrigger: {
      trigger: section,
      start: 'top center', 
      end : 'bottom center',
      scrub: true,
      
    }
  });
}

aplicarAnimacaoApresentacao(elemento: HTMLElement,
  section: HTMLElement,
  duracao: number,
  delayMultiplier: number,
  posicaoInicialX: number
): void {

gsap.from(elemento, {
  x: posicaoInicialX,
  opacity: 0,
  duration: duracao,
  ease: 'elastic.out(1, 1)',
  delay: 0.5 * delayMultiplier,
    scrollTrigger: {
      trigger: section,
      start: 'top center', 
      end : 'bottom center',
    }
  });
}

aplicarAnimacaoSkills(elemento: HTMLElement,
  section: HTMLElement,
  duracao: number,
  delayMultiplier: number,
  posicaoInicialX: number,
  posicaoInicialY: number,
  posicaoFinalX: number,
  posicaoFinalY: number,

): void {

gsap.fromTo(elemento, { x: posicaoInicialX, y: posicaoInicialY }, {
  duration: duracao,
  y: posicaoFinalY,
  x: posicaoFinalX,
  opacity: 1,
  ease: 'back.out(1.7)',
  delay: 0.5 * delayMultiplier,
    scrollTrigger: {
    trigger: section,
    start: 'top center', 
    end : 'bottom center',
    }
  });
}

aplicarAnimacaoContact(elemento: HTMLElement,
  section: HTMLElement,
  duracao: number,
  delayMultiplier: number,
  posicaoInicialX: number
): void {

gsap.from(elemento, {
  y: posicaoInicialX,
  opacity: 0,
  duration: duracao,
  ease: 'circ.out',
  delay: 0.5 * delayMultiplier,
    scrollTrigger: {
      trigger: section,
      start: 'center bottom', 
      end : 'bottom bottom',
      scrub: true,
    }
  });
}


}
