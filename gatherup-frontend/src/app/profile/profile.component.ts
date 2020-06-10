import { Component, OnInit } from '@angular/core';

import { User } from '../class/user/user';
import { ConfigService } from '../service/config.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	users: User[];

	constructor(private configService: ConfigService) {
	}

	ngOnInit(): void {
		// Upon initialization, extracts USERS from endpoint and inserts into user array
		this.configService.getAllUsers().subscribe(data => { this.users = data; });
	}
}
