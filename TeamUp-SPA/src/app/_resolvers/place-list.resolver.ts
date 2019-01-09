import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Place } from '../_models/place';
import { PlaceService } from '../_services/place.service';
@Injectable()
export class MemberListResolver implements Resolve<Place[]> {
    constructor( private placeService: PlaceService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Place[]> {
        return this.placeService.getPlaces().pipe(
            catchError(error => {
                this.alertify.error('problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
