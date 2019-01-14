import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { EventService } from '../_services/event.service';

@Injectable()
export class EventListResolver implements Resolve<Event[]> {
    constructor( private eventService: EventService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Event[]> {
        return this.eventService.getEvents().pipe(
            catchError(error => {
                this.alertify.error('problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
