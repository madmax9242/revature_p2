import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // enables form features for app
import { HttpClientModule } from '@angular/common/http'; // enables HTTP functionality for app
import { AppRoutingModule } from './app-routing.module'; // enables routing functionality for app

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';
import { ConfigService } from './service/config.service';
import { EventService } from './service/event.service';
import { PasswordEncryptionService } from './service/password-encryption.service';

// ROOT MODULE
@NgModule({
	declarations: [
		AppComponent,
		RegisterComponent,
		LoginComponent,
		ProfileComponent,
		EventComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
	],
	providers: [ConfigService, EventService, PasswordEncryptionService], // make providers global
	bootstrap: [AppComponent]
})
export class AppModule {
}
