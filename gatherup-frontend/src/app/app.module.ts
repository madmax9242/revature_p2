import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';
import { ConfigService } from './service/config.service';
import { EventService } from './service/event.service';
import { PasswordEncryptionService } from './service/password-encryption.service';
import { EventviewComponent } from './eventview/eventview.component';

@NgModule({
	declarations: [
		AppComponent,
		RegisterComponent,
		LoginComponent,
		ProfileComponent,
		EventComponent,
		EventviewComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
	],
	providers: [
		ConfigService,
		EventService,
		PasswordEncryptionService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
