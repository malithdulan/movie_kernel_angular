import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { KollywoodComponent } from './kollywood/kollywood.component';
import { PopulerComponent } from './populer/populer.component';
import { SuperheroComponent } from './superhero/superhero.component';
const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'bollywood', component: BollywoodComponent },
  { path: 'hollywood', component: HollywoodComponent },
  { path: 'kollywood', component: KollywoodComponent },
  { path: 'populer', component: PopulerComponent },
  { path: 'superhero', component: SuperheroComponent },
  { path:'movie-details/:id', component:MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }