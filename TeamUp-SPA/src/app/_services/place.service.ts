import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../_models/place';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.baseUrl + 'places', httpOptions);
  }

  getPlace(id): Observable<Place> {
    return this.http.get<Place>(this.baseUrl + 'places/' + id, httpOptions);
  }

}
