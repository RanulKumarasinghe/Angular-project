import { NgModule } from '@angular/core';
import { VideogamesComponent } from './videogames.component';
import { VideogameListComponent } from './videogame-list/videogame-list.component';
import { VideogamesDetailComponent } from './videogames-detail/videogames-detail.component';
import { VideogameGameComponent } from './videogame-game/videogame-game.component';
import { GameStartComponent } from './game-start/game-start.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VideogameRoutingModule } from './videogames-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule ({
  declarations: [
    VideogamesComponent,
    VideogameListComponent,
    VideogamesDetailComponent,
    VideogameGameComponent,
    GameStartComponent,
    GameEditComponent,
  ],
  imports: [RouterModule,
    ReactiveFormsModule, VideogameRoutingModule,
  SharedModule]

})
export class VideogamesModule {}
