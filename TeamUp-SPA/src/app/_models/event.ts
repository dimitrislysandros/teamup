import { Place } from './place';

export interface Event {
    id: number;
    name: string;
    eventDate: Date;
    chargePerPerson: number;
    placeId: number;
    place: Place;
    placeName: string;
}
