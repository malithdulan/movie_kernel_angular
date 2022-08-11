import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

@Injectable()
export class MovieService {

  private dbPath = '/movies';

  moviesRef: FirebaseListObservable<any> = null;

  constructor(private db: AngularFireDatabase) {
    this.moviesRef = db.list(this.dbPath, {
      query: {
        orderByChild: 'uploaddate'  ,
      }
    });
    
  }

  getMovieList(): FirebaseListObservable<any> {
    return this.moviesRef;
  }
  

  getMovie(uid:string){
    
    return this.db.object('movies/' + uid);
    
  }


  getMovies(start, end): FirebaseListObservable<any> {
    return this.db.list('movies', {
      query: {
        orderByChild: 'searchname',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
    });
  }

  





  getBollywood(): FirebaseListObservable<any>{
    return this.db.list('movies', {
      query:{
        orderByChild:'bollywood',
        equalTo: true
      }
    });
  }

  getHollywood(): FirebaseListObservable<any>{
    return this.db.list('movies', {
      query:{
        orderByChild:'hollywood',
        equalTo: true
      }
    });
  }
  
  getKollywood(): FirebaseListObservable<any>{
    return this.db.list('movies', {
      query:{
        orderByChild:'kollywood',
        equalTo: true
      }
    });
  }

  getPopuler(): FirebaseListObservable<any>{
    return this.db.list('movies', {
      query:{
        orderByChild:'populer',
        equalTo: true
      }
    });
  }

  getSuperhero(): FirebaseListObservable<any>{
    return this.db.list('movies', {
      query:{
        orderByChild:'superhero',
        equalTo: true
      }
    });
  }

}
