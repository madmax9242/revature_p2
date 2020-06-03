import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';
import { RouterModule } from '@angular/router';

// ROOT MODULE
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		ProfileComponent,
		EventComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,

		RouterModule.forRoot([
			{ path: 'login', component: LoginComponent },
			{ path: 'register', component: RegisterComponent },
			{ path: 'profile', component: ProfileComponent },
			{ path: 'event', component: EventComponent },
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
