import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { EventsComponent } from './events/events.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { EventDetailResolver } from './_resolvers/event-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PlaceListComponent } from './places/place-list/place-list.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { PlaceDetailResolver } from './_resolvers/place-detail.resolver';
import { PlaceListResolver } from './_resolvers/place-list.resolver';
import { EventListResolver } from './_resolvers/events.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'players',
        component: MemberListComponent,
        resolve: { users: MemberListResolver }
      },
      {
        path: 'players/:id',
        component: MemberDetailComponent,
        resolve: { user: MemberDetailResolver }
      },
      {
        path: 'player/edit',
        component: MemberEditComponent,
        resolve: { user: MemberEditResolver }
      },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
      {
        path: 'events',
        component: EventsComponent,
        resolve: { events: EventListResolver }
      },
      {
        path: 'events/:id',
        component: EventDetailComponent,
        resolve: { event: EventDetailResolver }
      },
      {
        path: 'places',
        component: PlaceListComponent,
        resolve: { places: PlaceListResolver }
      },
      {
        path: 'places/:id',
        component: PlaceDetailComponent,
        resolve: { place: PlaceDetailResolver }
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
