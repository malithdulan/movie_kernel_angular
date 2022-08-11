import { Component, OnInit } from '@angular/core';
import {MovieService} from '../shared/movie.service';
import { Subject } from 'rxjs/Subject';
import { Movies } from '../shared/movies'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent implements OnInit {

  movies:Movies;
  startAt = new Subject()
  endAt = new Subject()
  q:any;
  
  constructor(private moviesSvc: MovieService) { 
    
  }

  

  ngOnInit() {


    this.moviesSvc.getMovies(this.startAt, this.endAt)
                  .subscribe(movies =>{ 
                    this.movies = movies

                    let body = document.getElementsByClassName('searchinput')[0];
                    body.classList.remove("loading");
                    
                    if(movies.length == 0){
                      
                    }

                  });
                  

                  
  }

  

  lastKeypress: number = 0;

//...omitted

search($event) {
  
  if ($event.timeStamp - this.lastKeypress > 200) {

    let body = document.getElementsByClassName('searchinput')[0];
    body.classList.add('loading');

    let q = $event.target.value.toLowerCase();
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
  }
  this.lastKeypress = $event.timeStamp
}






}
