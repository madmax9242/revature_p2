import { Component, OnInit } from '@angular/core';
import { ConfigService, RickMorty } from '../service/config.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	constructor(private service: ConfigService) {
	}

	ngOnInit(): void {
	}

	// API TESTING
	character: RickMorty; // maps to RickMorty interface schema defined in ConfigService
	id: number;

	getCharacter() {
		if (this.id == undefined || this.id > 591) {
			console.log("Invalid or missing ID");
		} else {
			this.service.setUrl(this.id);

			this.service.getRickMorty().subscribe((data: RickMorty) => {
				this.character = data;
			})
		}
	}
}
