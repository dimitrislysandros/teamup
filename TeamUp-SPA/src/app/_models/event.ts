import { Place } from './place';
import { User } from './user';

export interface Event {
    id: number;
    name: string;
    eventDate: Date;
    chargePerPerson: number;
    placeId: number;
    place: Place;
    placeName: string;
    placeLatitude: number;
    placeLongitude: number;
}
