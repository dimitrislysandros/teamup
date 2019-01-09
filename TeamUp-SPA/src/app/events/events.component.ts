import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '../_models/event';
import { EventService } from '../_services/event.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[];
  eventSelected: Event;
  eventToShow: Event;
  @Output() clicked = new EventEmitter<Event>();

  constructor(
    private eventService: EventService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.loadEvents();

  }
  loadEvents() {
    this.eventService.getEvents().subscribe(
      (events: Event[]) => {
        this.events = events;
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
}
