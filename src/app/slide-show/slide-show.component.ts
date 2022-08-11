import { Component, OnInit } from '@angular/core';
import { OtherService } from '../shared/other.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {


  private subscription: Subscription;
  movieid: any;
  checkingC:boolean = true;
  constructor(private otherService:OtherService) {}



  ngOnInit() {
    this.getmovieid();
    
  }


  getmovieid(){
    this.subscription = this.otherService.getState().subscribe(
      movieid => {
        this.movieid = movieid;
        this.checkmethod();
      });
      
  }

  checkmethod(){;
    if(this.movieid == '12'){
      this.checkingC = false;
    }
  }


}
