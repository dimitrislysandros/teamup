import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/_models/place';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { PlaceService } from 'src/app/_services/place.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() places: Place[];
  latitudes: number[];
  longitudes: number[];

  constructor(
    private alertify: AlertifyService,
    private placeService: PlaceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.loadPlaces();
  }




  loadPlaces() {
    // this.placeService.getPlaces().subscribe(
    //   (places: Place[]) => {
    //     this.places = places;
    //   },
    //   error => {
    //     this.alertify.error(error);
    //   }
    // );
  }
}
