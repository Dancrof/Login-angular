import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {

  movies = [
    {
      image: 'https://static.wikia.nocookie.net/featteca/images/1/19/JW.jpg/revision/latest?cb=20200512045254&path-prefix=es',
      title: 'pepito'
    },
    {
      image: 'https://img.autocosmos.com/noticias/fotosprinc/NAZ_5dccc27ff4c64672b4f157feb7da2947.jpg',
      title: 'pepito'
    },
    {
      image: 'https://pics.filmaffinity.com/El_transportador-497298369-large.jpg',
      title: 'pepito'
    },
    {
      image: 'https://es.web.img3.acsta.net/medias/nmedia/18/67/78/13/20066706.jpg',
      title: 'pepito'
    },
    {
      image: 'https://es.web.img3.acsta.net/medias/nmedia/18/67/78/13/20066706.jpg',
      title: 'pepito'
    },
    {
      image: 'https://es.web.img3.acsta.net/medias/nmedia/18/67/78/13/20066706.jpg',
      title: 'pepito'
    },
    {
      image: 'https://es.web.img3.acsta.net/medias/nmedia/18/67/78/13/20066706.jpg',
      title: 'pepito'
    }
];
  constructor() { }

  ngOnInit(): void {
  }

}
