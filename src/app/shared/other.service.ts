import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable, FirebaseOperation} from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class OtherService {

  private dbPath = '/maincount';
  moviesRef: FirebaseListObservable<any> = null;
  itemRef :FirebaseObjectObservable<any> = null;

  constructor(private db: AngularFireDatabase) {
    this.itemRef = db.object('mainviewcount');
    this.moviesRef = db.list('eachviewcount');
  }


  private movieid = new Subject<any>();

  setState(state: any) {
    this.movieid.next(state);
  }

  getState(): Observable<any> {
    return this.movieid.asObservable();
  }

  result: Number;
  //counting main movie page visit count
  createMainView(pCount: any): void{
    this.result = pCount + 1;
    this.itemRef.set({ numberOfView: this.result});

    
  }

  getMainView(){
    return this.db.object('mainviewcount/' + 'numberOfView');
  }

getEachView(key:FirebaseOperation){
  return this.db.object('eachviewcount/' + key);
}

createEachView(key:FirebaseOperation,ECount: any){
  this.result = ECount + 1;
  this.moviesRef.set(key ,{ site: this.result });
}



}
