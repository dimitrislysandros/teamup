import { PlacesPhoto } from './placesPhoto';

export interface Place {
  id: number;
  name: string;
  country: string;
  city: string;
  address: string;
  howToBook: string;
  info: string;
  latitude: number;
  longitude: number;
  fieldType: string;
  fieldSize: string;
  public: boolean;
  photos?: PlacesPhoto[];
}
