import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';
import { EventviewComponent } from './eventview/eventview.component';
import { ConfigService } from './service/config.service';
import { EventService } from './service/event.service';
import { PasswordEncryptionService } from './service/password-encryption.service';

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
		LoggerModule.forRoot({
			serverLoggingUrl: 'http://localhost:9999/api/logs', // URL to POST logs
			level: NgxLoggerLevel.DEBUG, // only log messages of this level or higher (OFF disables logger for client)
			serverLogLevel: NgxLoggerLevel.ERROR, // only send log messages of this level or higher to the server (OFF disables logger for server)
			timestampFormat: 'long', // format for the timestamp displayed w/ each log message
			colorScheme: ['purple', 'teal', 'gray', 'gray', 'red', 'red', 'red'] // TRACE|DEBUG|INFO|LOG|WARN|ERROR|FATAL|OFF
		})
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
