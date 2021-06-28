import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Videogame } from '../videogame.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map, switchMap } from 'rxjs/operators';
import * as GamesActions from '../store/game.actions';
import * as FeatureListActions from '../../features-list/store/feature-list.actions';

@Component({
  selector: 'app-videogames-detail',
  templateUrl: './videogames-detail.component.html',
  styleUrls: ['./videogames-detail.component.css']
})
export class VideogamesDetailComponent implements OnInit {
  videogame: Videogame;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>) {

    }

  ngOnInit() {
    this.route.params.pipe(map(params => {
      return +params['id'];
    }), switchMap(id => {
      this.id = id;
      return this.store.select('games');

    }),
    map(gamesState => {
      return gamesState.games.find((game, index) => {
        return index === this.id;
      });
    })
    ).subscribe(game => {
          this.videogame = game;
         });  
  }

  addToFeatures(){
    //this.gameService.addFeatures(this.videogame.features);
    this.store.dispatch(new FeatureListActions.AddFeatures(this.videogame.features));
  }

  onEditGame(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteGame(){
    //this.gameService.deleteVideoGame(this.id);
    this.store.dispatch(new GamesActions.DeleteGame(this.id));
    this.router.navigate(['/videogames']);
  }
}
