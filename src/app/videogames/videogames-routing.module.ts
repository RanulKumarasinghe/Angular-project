import { NgModule } from '@angular/core';
import { VideogamesComponent } from './videogames.component';
import { AuthGuard } from '../auth/auth.guard';
import { GameStartComponent } from './game-start/game-start.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { VideogamesDetailComponent } from './videogames-detail/videogames-detail.component';
import { GameResolverService } from './games-resolver.service';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: VideogamesComponent,
  canActivate: [AuthGuard],
  children: [
    { path: '', component: GameStartComponent},
    {path: 'new', component: GameEditComponent },
    { path: ':id', component: VideogamesDetailComponent, resolve: [GameResolverService]},
    {path: ':id/edit', component: GameEditComponent, resolve: [GameResolverService] }

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideogameRoutingModule{}
