import { Component } from '@angular/core';
import { EventService } from './service/event.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title: 'GatherUp';
	subTitle: 'Not a Meetup Clone';

	constructor(private eventService: EventService) {

	}

	ngOnInit() {
	}
}
