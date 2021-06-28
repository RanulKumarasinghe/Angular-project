import { Action } from '@ngrx/store';
import { Videogame } from '../videogame.model';

export const SET_GAMES = '[videogames] Set Games';
export const FETCH_GAMES = '[videogames] Fetch Games';
export const ADD_GAME = '[videogames] Add Game';
export const UPDATE_GAME = '[videogames] Update Game';
export const DELETE_GAME = '[videogames] Delete Game';
export const STORE_GAMES = '[videogames] Store Games';
export class SetGames implements Action {
	readonly type = SET_GAMES;

	constructor(public payload: Videogame[]) {}
}

export class FetchGame implements Action {
	readonly type = FETCH_GAMES;
}


export class AddGame implements Action {
	readonly type = ADD_GAME;

	constructor(public payload: Videogame) {}
}

export class UpdateGame implements Action {
	readonly type = UPDATE_GAME;

	constructor(public payload: {index: number; newGame: Videogame}) {}
}

export class DeleteGame implements Action {
	readonly type = DELETE_GAME;

	constructor(public payload: number) {}
}

export class StoreGames implements Action {
	readonly type = STORE_GAMES;

}

export type GamesActions = 
SetGames |
FetchGame |
AddGame |
UpdateGame |
DeleteGame |
StoreGames; 