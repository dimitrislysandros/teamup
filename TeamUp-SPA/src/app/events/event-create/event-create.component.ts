import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/_models/place';
import { PlaceService } from 'src/app/_services/place.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Event } from 'src/app/_models/event';
import { EventService } from 'src/app/_services/event.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Time } from 'ngx-bootstrap/timepicker/timepicker.models';

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
  minDate: Date;
  time: Time;
  dateSelected = false;

  constructor( private placeService: PlaceService, private alertify: AlertifyService,
       private router: Router, private fb: FormBuilder, private eventService: EventService) {
       }

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.createRegisterForm();
    this.loadPlaces();
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: [''],
      date: [null, Validators.required],
      place: [null, Validators.required],
      placeId: [null, Validators.required],
      charge: ['', Validators.required],
      time: [null, Validators.required]
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

  enableTime() {
    this.dateSelected = true;
  }
  createEvent() {
    if (this.registerForm.valid) {
      this.event = Object.assign({}, this.registerForm.value);
      this.eventService.createEvent(this.event).subscribe(() => {
        this.alertify.success('Event created');
      }, error => {
        this.alertify.error(error);
      }, () => {
        this.router.navigate(['/events']);
      });
    }
  }
}
