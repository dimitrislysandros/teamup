import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '../_models/event';
import { EventService } from '../_services/event.service';
import { AlertifyService } from '../_services/alertify.service';
import { Place } from '../_models/place';
import { PlaceService } from '../_services/place.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[];
  eventSelected: Event;
  eventToShow: Event;
  returnedArray: Event [];
  arrayLength: number;

  places: Place[];
  @Output() clicked = new EventEmitter<Event>();

  constructor(
    private eventService: EventService,
    private alertify: AlertifyService,
    private placeService: PlaceService
  ) {}

  ngOnInit() {
    this.loadEvents();
    this.loadPlaces();

  }
  loadEvents() {
    this.eventService.getEvents().subscribe(
      (events: Event[]) => {
        this.events = events;
        this.returnedArray = this.events.slice(0, 10);
        this.arrayLength = events.length;
      },
      error => {
        this.alertify.error(error);
      }
    );
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

  onSelect(event: Event): void {
    this.eventSelected = event;
    console.log(event.id);
  }

  selectedEvent() {
    this.clicked.emit(this.eventSelected);

    this.eventService.getEvent(this.eventSelected.id).subscribe(
      (event: Event) => {
        this.eventToShow = event;
      },
      error => {
        this.alertify.error(error);
      }
    );
    console.log('the event is ' + this.eventToShow);
  }


  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.events.slice(startItem, endItem);
  }
}
