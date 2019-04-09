import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/_models/place';
import { PlaceService } from 'src/app/_services/place.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Event } from 'src/app/_models/event';
import { EventService } from 'src/app/_services/event.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  // place: Place;
  places: Place[];
  public event: Event;
  registerForm: FormGroup;

  constructor( private placeService: PlaceService, private alertify: AlertifyService,
       private router: Router, private fb: FormBuilder, private eventService: EventService) {}

  ngOnInit() {
    this.loadPlaces();
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: [''],
      date: [null, Validators.required],
      place: [null, Validators.required],
      charge: [0, Validators.required],
    });
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
    // this.event. = this.eventName;
    // this.event.name = this.eventName;
    // this.event.eventDate = this.date;
    // this.event.place = this.place;
    // this.event.placeId = this.place.id;
    // this.event.chargePerPerson = this.charge;
    // this.eventService.createEvent(this.eventToCreate).subscribe(() => {
    //   this.alertify.success('Event created');
    // }, error => {
    //   this.alertify.error(error);
    // }, () => {
    //   this.router.navigate(['/events']);
    // });
  }
}
