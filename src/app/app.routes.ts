import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
        path: 'home', 
        component: AppComponent
    },
    {
        path: 'presentation',
        component: PresentationComponent
    },
];
