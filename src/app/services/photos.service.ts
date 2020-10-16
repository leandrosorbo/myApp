import { Injectable } from '@angular/core';

export interface Photos {
    id: number;
    liked: boolean;
    description: string;
    comment_count: number;
    place: string;
    user: {
        id: number;
        name: string;
    };
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private photos: Photos[] = [
    {
      id: 0,
    liked: true,
    description: "Ser ou não ser eis a questão.",
    comment_count: 1555,
    place: "São Paulo, SP",
    user: {
      id: 95,
      name: "Leandro"
    }
  },
   {

    id: 1,
    liked: true,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    comment_count: 42,
    place: "São Paulo, SP",
    user: {
      id: 5,
      name: "foo_bar"
    }
  },
  {
    id: 2,
    liked: false,
    description: "No alto daquele cume plantei uma roseira.",
    comment_count: 44,
    place: "Pindamonhagaba, SP",
    user: {
      id: 50,
      name: "Douglas"
    }
  },
  {
    id: 3,
  liked: true,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  comment_count: 30,
  place: "Santos, SP",
  user: {
    id: 23,
    name: "Prof. Matheus"
  }
}
  ];

  constructor() { }

  public allPhotos() {
    return this.photos;
  }

  public findPhoto(id: number) {
    return this.photos.find(p => p.id == id);
  }
}
