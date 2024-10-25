import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {
        path:'', component:MainPageComponent
    },
    {
        path:'nav', component:NavbarComponent
    }
];
