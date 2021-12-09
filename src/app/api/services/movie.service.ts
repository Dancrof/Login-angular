import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  movieCollection: AngularFirestoreCollection<Movie>;
  movies: Observable<Movie[]>;
  movie: Observable<Movie>;
  movieDoc: AngularFirestoreDocument<Movie>;
  
  constructor(public db: AngularFirestore) {

    this.movieCollection = this.db.collection('movies');
    this.movies = this.movieCollection.snapshotChanges().pipe(map(action => {
        
      return action.map(m => {
        const data = m.payload.doc.data() as Movie;
        data.id = m.payload.doc.id;
        return data;
      });

    }));
  }

   getMoviesAll(){
    return this.movies;
  }

  getMovie(id: string){
    this.movieDoc = this.db.doc(`movies/${id}`);
    return this.movie = this.movieDoc.valueChanges();
  }
}
