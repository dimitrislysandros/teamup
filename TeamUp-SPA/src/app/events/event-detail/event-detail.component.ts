import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/_services/event.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/_models/event';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  constructor(private eventService: EventService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.event = data['event'];
    });
  }

  // loadEvent() {
  //   this.eventService.getEvent(+this.route.snapshot.params['id'])
  //     .subscribe((event: Event) => {
  //       this.event = event;
  //     }, error => {
  //       this.alertify.error(error);
  //     });
  // }
}
