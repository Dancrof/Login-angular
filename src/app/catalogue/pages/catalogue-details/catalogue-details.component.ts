import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/api/models/movie';
import { MovieService } from 'src/app/api/services/movie.service';

@Component({
  selector: 'app-catalogue-details',
  templateUrl: './catalogue-details.component.html',
  styleUrls: ['./catalogue-details.component.css']
})
export class CatalogueDetailsComponent implements OnInit {

  movie: Movie = {
    id: '',
    imageUrl: '',
    name: '',
    sinopsis: '',
    genero: [''],
    idiom: '',
    videoUrl: ''
  };

  constructor(private router: ActivatedRoute, private movieSvc: MovieService) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.getMovie(id);
  }

  getMovie(id : string){
    this.movieSvc.getMovie(id).subscribe(data => {
      this.movie = data;
    });
  }

}
