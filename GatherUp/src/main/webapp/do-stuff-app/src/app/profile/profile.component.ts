import { Component, OnInit } from '@angular/core';
import { ConfigService, RickMorty } from '../service/config.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	constructor(private configService: ConfigService) {
	}

	ngOnInit(): void {
	}

	// API TESTING
	character: RickMorty; // maps to RickMorty interface schema
	getTest() {
		this.configService.getRickMorty().subscribe((data: RickMorty) => {
			this.character = data;
		})
	}
}
