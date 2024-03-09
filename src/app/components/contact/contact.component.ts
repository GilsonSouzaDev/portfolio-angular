import { AnimationsService } from './../../services/animations.service';
import { AfterViewInit, Component, ElementRef, ViewChild, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgForm } from '@angular/forms';
import { MessageComponent } from '../message/message.component';
import { NotificacoesComponent } from '../notificacoes/notificacoes.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [  
    MatFormFieldModule, 
    MatFormField,
    FormsModule,
    MatInputModule,
    MessageComponent,
    MatButtonModule,
    NotificacoesComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent{

  @ViewChild('container', {static: true}) container!: ElementRef<HTMLDivElement>;
  @ViewChild('emailAnimation', {static: true}) emailAnimation!: ElementRef<HTMLDivElement>;
  @ViewChild('nameAnimation', {static: true}) nameAnimation!: ElementRef<HTMLDivElement>;
  @ViewChild('foneAnimation', {static: true}) foneAnimation!: ElementRef<HTMLDivElement>;
  @ViewChild('assuntoAnimation', {static: true}) assuntoAnimation!: ElementRef<HTMLDivElement>;
  @ViewChild('mensagemAnimation', {static: true}) mensagemAnimation!: ElementRef<HTMLDivElement>;
  @ViewChild('buttonAnimation', {static: true}) buttonAnimation!: ElementRef<HTMLDivElement>;

  constructor(private animationService: AnimationsService,
              public dialog: MatDialog,          
    ){}
  

  enviar(form: NgForm){
    if(form.invalid){
       this.onError("Preencha todos os campos obrigatorios"); 
    }else{
      const assunto = form.value.assunto
      const destinatario = 'gilsonsouza.dev@gmail.com'
      const mensagem = form.value.nome + "\n" + "E-mail: "+ form.value.emailContact + "\n" +"Telefone: "+ form.value.fone + "\n" + form.value.conteudo
      this.abrirClienteEmail(destinatario, assunto, mensagem);
      console.log(mensagem);
      console.log(form.value);
      form.reset();
    }

  }

  abrirClienteEmail(destinatario: string, assunto: string, mensagem: string ) {
    const corpoEmail = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`;
    window.location.href = corpoEmail;
  }

  onError(errorMsg: string) {
      this.dialog.open(NotificacoesComponent, {
      data: errorMsg
    });  
  }

  onCorrect(errorMsg: string) {
    this.dialog.open(NotificacoesComponent, {
    data: errorMsg
  });  
}


}