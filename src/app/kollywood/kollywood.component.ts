import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Movies } from '../shared/movies'
@Component({
  selector: 'app-kollywood',
  templateUrl: './kollywood.component.html',
  styleUrls: ['./kollywood.component.css']
})
export class KollywoodComponent implements OnInit {

  p: number = 1;
  order: string = 'uploaddate';
  movies: Movies = null;
  anim:boolean = true;
  loading_over:boolean = false;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovieList();
  }


  getMovieList() {
    this.movieService.getKollywood().subscribe(movies => {
      this.movies = movies;
      this.anim = false;
      this.loading_over =true;
    });
    
  }
}
