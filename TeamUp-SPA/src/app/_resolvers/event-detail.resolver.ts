import { Injectable } from '@angular/core';
import { Event } from '../_models/event';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from '../_services/event.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class EventDetailResolver implements Resolve<Event> {
    constructor( private eventService: EventService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Event> {
        return this.eventService.getEvent(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('problem retrieving data');
                this.router.navigate(['/events']);
                return of(null);
            })
        );
    }
}
