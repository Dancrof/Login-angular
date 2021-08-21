import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/api/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies = [];
  constructor(
    private router: Router,
    private movieSvc: MovieService
  ) { }

  ngOnInit(){
    this.movieSvc.getMovies().subscribe(movies => {
      this.movies = movies;
    })
  }

}
