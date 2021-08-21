import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  movieCollection: Observable<Movie[]>;
  movies: Observable<Movie[]>;
  movie: Observable<Movie>;
  
  constructor(public db: AngularFirestore) {}

  getMovies(){
    return this.movies = this.db.collection('movies').valueChanges();
  }

  getMovie(){
    
  }
}
