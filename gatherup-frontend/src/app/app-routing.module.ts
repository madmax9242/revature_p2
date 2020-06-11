import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';
import { AppComponent } from './app.component';
import { EventviewComponent } from './eventview/eventview.component';

const routes: Routes = [
	{ path: 'home', component: AppComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'event', component: EventComponent },
	{ path: 'eventview', component: EventviewComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
