import { Photo } from './photo';

export interface Place {
  id: number;
  name: string;
  country: string;
  city: string;
  address: string;
  howToBook: string;
  info: string;
  latitude: string;
  longitude: string;
  fieldType: string;
  fieldSize: string;
  public: boolean;
  photos?: Photo[];
}
