import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from "./components/presentation/presentation.component";
import { HeaderComponent } from "./components/header/header.component";
import { MatDividerModule } from '@angular/material/divider';
import { ContentComponent } from './components/content/content.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet, 
      PresentationComponent, 
      HeaderComponent, 
      MatDividerModule, 
      ContentComponent, 
      SkillsComponent, 
      ProjectComponent,
      ContactComponent,
      MatFormField,
      FormsModule,
      FooterComponent
    ]
})
export class AppComponent {
  title = 'Portifolio-Angular';
}
