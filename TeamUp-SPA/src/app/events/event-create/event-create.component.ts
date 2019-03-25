import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/_models/place';
import { PlaceService } from 'src/app/_services/place.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  // place: Place;
  places: Place[];
  event: Event;

  constructor( private placeService: PlaceService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadPlaces();
  }

  loadPlaces() {
    this.placeService.getPlaces().subscribe(
      (places: Place[]) => {
        this.places = places;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  createEvent() {
    console.log('Event created');
    this.alertify.success('Event created!');
  }
}
