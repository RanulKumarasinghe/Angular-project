import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Videogame } from './videogame.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as GamesActions from '../videogames/store/game.actions';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})

export class GameResolverService implements Resolve<Videogame[]>{
  constructor(private store: Store<fromApp.AppState>,
    private actions$: Actions) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    //return this.dataStorageService.fetchGames();
    return this.store.select('games').pipe(
      take(1),
      map(gamesState => {
      return gamesState.games;
    }),
    switchMap(games => {
      if (games.length === 0) {
        this.store.dispatch(new GamesActions.FetchGame());
        return this.actions$.pipe(ofType(GamesActions.SET_GAMES), 
      take(1)
      );
      } else {
        return of(games);
      }
    })
    );  
      
  }

}
