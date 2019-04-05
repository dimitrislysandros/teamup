import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    name: string;
    gender: string;
    age: number;
    created: Date;
    interests: string;
    lastActive: Date;
    country: string;
    city: string;
    interestedIn?: string;
    photoUrl: string;
    photos?: Photo[];
}
