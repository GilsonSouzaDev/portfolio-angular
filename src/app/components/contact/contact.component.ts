import { AnimationsService } from './../../services/animations.service';
import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgForm } from '@angular/forms';
import { MessageComponent } from '../message/message.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [  
    MatFormFieldModule, 
    MatFormField,
    FormsModule,
    MatInputModule,
    MessageComponent,
    MatButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent implements AfterViewInit{

  @ViewChild('container', {static: true}) container!: ElementRef<HTMLDivElement>;
  @ViewChild('emailAnimation', {static: true}) emailAnimation!: ElementRef<HTMLDivElement>;
  @ViewChild('nameAnimation', {static: true}) nameAnimation!: ElementRef<HTMLDivElement>;
  @ViewChild('foneAnimation', {static: true}) foneAnimation!: ElementRef<HTMLDivElement>;
  @ViewChild('assuntoAnimation', {static: true}) assuntoAnimation!: ElementRef<HTMLDivElement>;
  @ViewChild('mensagemAnimation', {static: true}) mensagemAnimation!: ElementRef<HTMLDivElement>;
  @ViewChild('buttonAnimation', {static: true}) buttonAnimation!: ElementRef<HTMLDivElement>;

  constructor(private animationService: AnimationsService){}
  
  protected animation = this.animationService.aplicarAnimacaoContact;
  
  ngAfterViewInit(): void {
    this.animation(this.emailAnimation.nativeElement, this.container.nativeElement, 2, 1, 100);
    this.animation(this.nameAnimation.nativeElement, this.container.nativeElement, 2, 2, -100);
    this.animation(this.foneAnimation.nativeElement, this.container.nativeElement, 2, 3, 100);
    this.animation(this.assuntoAnimation.nativeElement, this.container.nativeElement, 2, 4, -100);
    this.animation(this.mensagemAnimation.nativeElement, this.container.nativeElement, 2, 5, 100);
    this.animation(this.buttonAnimation.nativeElement, this.container.nativeElement, 2, 6, -100);
  }
  




  enviar(form: NgForm){
    
  }

}
