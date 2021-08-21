import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue-details',
  templateUrl: './catalogue-details.component.html',
  styleUrls: ['./catalogue-details.component.css']
})
export class CatalogueDetailsComponent implements OnInit {

  movie = {
    id: '',
    imageUrl: '',
    name: '',
    sinopsis: '',
    genero: [''],
    idiom: '',
    videoUrl: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
