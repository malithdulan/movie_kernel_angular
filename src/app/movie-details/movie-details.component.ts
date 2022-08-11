import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { OtherService } from '../shared/other.service';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

import { DMovie } from '../shared/views'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieid: any;
  mid:any = '12';
  movie:any;
  anim:boolean = true;
  viewE: DMovie = null;
  constructor(private movieService: MovieService, private otherService:OtherService, private route: ActivatedRoute,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    
      this.movieid = this.route.snapshot.params.id;
      //get view count
      this.otherService.getEachView(this.movieid).subscribe(movies => {
        this.viewE = movies;

        

      });
      //get movie data
      this.getData(this.movieid);
      this.setperam(this.mid);
      
  }

  //sharing url perameter
  setperam(mid){
    this.otherService.setState(mid);
  }


  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


  getData(movieid){
    this.movieService.getMovie(movieid).subscribe(movies => {
      this.movie = movies;
      this.anim = false;
      
      //set view count
      if(!this.viewE.site){
        this.viewE.site = 0;
        }
       this.otherService.createEachView(this.movieid,this.viewE.site)

    });
  }

}
