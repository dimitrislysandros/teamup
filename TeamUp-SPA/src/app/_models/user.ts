import { Photo } from './photo';

export interface User {
    id: number;
    name: string;
    username: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    photos?: Photo[];
}
