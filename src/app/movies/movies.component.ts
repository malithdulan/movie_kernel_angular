import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { OtherService } from '../shared/other.service';
import { Movies } from '../shared/movies'
import { Movie } from '../shared/views'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})



export class MoviesComponent implements OnInit {

  p: number = 1;
  order: string = 'uploaddate';
  movies: Movies = null;
  viewC: Movie = null;
  anim:boolean = true;
  loading_over:boolean = false;

  

  constructor(private movieService: MovieService,private otherService: OtherService) { }

  ngOnInit() {
    this.getMovieList();
    this.otherService.getMainView().subscribe(movies => {
      this.viewC = movies;
    });
    
  }


  getMovieList() {
    this.movieService.getMovieList().subscribe(movies => {
      this.movies = movies;
      this.anim = false;
      this.loading_over = true;

      //create main view count
      if(!this.viewC.$value){
        this.viewC.$value = 0;
      }
      this.otherService.createMainView(this.viewC.$value)
    });
    
  }

}
