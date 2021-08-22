import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/api/models/movie';
import { MovieService } from 'src/app/api/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[];
  constructor(
    private router: Router,
    private movieSvc: MovieService
  ) { }

  ngOnInit(){
   this.getMovies();
  }

  getMovies(){
    this.movieSvc.getMoviesAll().subscribe(data => {
      this.movies = data;
    })
  }

  wachtMovie(){
    this.router.navigate(['/catalogue/list/view/details/']);
  }
}
