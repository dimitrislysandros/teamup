import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/_services/place.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/_models/place';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {
  place: Place;
  places: Place[];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private placeService: PlaceService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {
    this.places = [];
    this.galleryImages = [];
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.place = data['place'];
      this.places.push(this.place);
    });

    this.galleryOptions = [
      {
        width: '1000px',
        height: '1000px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];

    // this.galleryImages = this.getImages();
  }

  // getImages() {
  //   const imageUrls = [];
  //   for (let i = 0; i < this.place.photos.length; i++) {
  //     imageUrls.push({
  //       small: this.place.photos[i],
  //       medium: this.place.photos[i].url,
  //       big: this.place.photos[i].url,
  //       description: this.place.photos[i].description
  //     });
  //     return imageUrls;
  //   }
  // }
}
