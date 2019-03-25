import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';
import { AgmCoreModule } from '@agm/core';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.intercepter';
import { AlertifyService } from './_services/alertify.service';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { EventService } from './_services/event.service';
import { UserService } from './_services/user.service';
import { MemberCardComponent } from './members/member-list/member-card/member-card.component';
import { EventsComponent } from './events/events.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { EventDetailResolver } from './_resolvers/event-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { PlaceService } from './_services/place.service';
import { PlaceListComponent } from './places/place-list/place-list.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PlaceDetailResolver } from './_resolvers/place-detail.resolver';
import { EventListResolver } from './_resolvers/events.resolver';
import { PlaceListResolver } from './_resolvers/place-list.resolver';
import { MapComponent } from './map/map.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      EventsComponent,
      MemberDetailComponent,
      EventDetailComponent,
      EventCreateComponent,
      PlaceListComponent,
      PlaceDetailComponent,
      MemberEditComponent,
      MapComponent
   ],
   imports: [
      BrowserModule,
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyBd8BuVyxKOotJ_WLW71oLS5SKXE578UzI'
       }),
      HttpClientModule,
      FormsModule,
      DlDateTimePickerDateModule,
      // OwlDateTimeModule,
      // OwlNativeDateTimeModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      EventService,
      MemberDetailResolver,
      MemberListResolver,
      EventDetailResolver,
      EventListResolver,
      PlaceService,
      MemberEditResolver,
      PlaceDetailResolver,
      PlaceListResolver,
      PreventUnsavedChanges
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
