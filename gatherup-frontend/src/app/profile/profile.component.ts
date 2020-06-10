import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { User } from '../class/user/user';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user: User[];

	constructor(private service: ConfigService) {
	}

	ngOnInit(): void {
		// Upon initialization, extracts user from endpoint and inserts into user array
		this.service.getUser().subscribe(data => { this.user = data; });
	}
}
