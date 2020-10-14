import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public photos = [
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

  ngOnInit() {
  }

}
