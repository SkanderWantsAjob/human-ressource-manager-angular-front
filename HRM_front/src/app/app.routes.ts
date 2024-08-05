import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SignupComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
    ,
    {
        path : 'projects',
        component : ProjectComponent
    },
    {
        path :'signup',
        component: SignupComponent
    }
];
