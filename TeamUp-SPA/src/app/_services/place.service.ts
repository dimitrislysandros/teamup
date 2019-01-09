import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../_models/place';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.baseUrl + 'places');
  }

  getPlace(id): Observable<Place> {
    return this.http.get<Place>(this.baseUrl + 'place/' + id);
  }

}
