import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/_services/place.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/_models/place';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  places: Place[];
  constructor(
    private placeService: PlaceService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.places = data['places'];
    }, error => {
      this.alertify.error(error);
    });
  }
}
