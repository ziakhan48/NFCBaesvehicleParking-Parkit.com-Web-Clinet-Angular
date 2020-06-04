import { LoginFormComponent } from './account/login-form/login-form.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {path: 'account/login-form', component: LoginFormComponent}
  ];
// tslint:disable-next-line:typedef-whitespace
export const App : ModuleWithProviders = RouterModule.forRoot(appRoutes); {

}
