import { Actions, Effect, ofType } from '@ngrx/effects';
import * as GamesActions from './game.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Videogame } from '../videogame.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';


@Injectable()
export class GameEffects {
	@Effect()
	fetchGames = this.actions$.pipe(
		ofType(GamesActions.FETCH_GAMES),
	switchMap(() => {
		return this.http.
		get<Videogame[]>(
			'https://my-videogame-project.firebaseio.com/games.json',
		  );
	}),
	map(games => {
		return games.map( game => {
		  return {...game, features: game.features ?
		 game.features: []};
		});
	  }),
	  map(games => {
		  return new GamesActions.SetGames(games);
	  }),
	);

	@Effect({dispatch: false})
	storeGames = this.actions$.pipe(
		ofType(GamesActions.STORE_GAMES),
		withLatestFrom(this.store.select('games')),
	switchMap(([actionData, gamesState]) => {
		return this.http.
		put(
			'https://my-videogame-project.firebaseio.com/games.json',
		gamesState.games
		);
	})
	);
	constructor(private actions$: Actions, private http: HttpClient, private store: Store<fromApp.AppState>) {}
}