import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { environment } from '../environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './shared/movie.service';
import { OtherService } from './shared/other.service';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { KollywoodComponent } from './kollywood/kollywood.component';
import { PopulerComponent } from './populer/populer.component';
import { SuperheroComponent } from './superhero/superhero.component';
import { OrderModule } from 'ngx-order-pipe';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SecondNavComponent } from './second-nav/second-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MovieDetailsComponent,
    MoviesComponent,
    BollywoodComponent,
    HollywoodComponent,
    KollywoodComponent,
    PopulerComponent,
    SuperheroComponent,
    SlideShowComponent,
    SecondNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    OrderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [MovieService, OtherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
