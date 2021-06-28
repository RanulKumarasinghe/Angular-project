import { Videogame } from '../videogame.model';
import * as GamesActions from './game.actions';

export interface State {
	games: Videogame[];
}

const initialState: State = {
	games: []
};

export function gameReducer(state = initialState, action: GamesActions.GamesActions) {
   switch (action.type) {
     case GamesActions.SET_GAMES:
		 return {
			 ...state,
			 games: [...action.payload]
		 };
		 case GamesActions.ADD_GAME:
			 return {
				 ...state,
				 games: [...state.games, action.payload]
			 };

			 case GamesActions.UPDATE_GAME:
				 const updatedGame = { 
					 ...state.games[action.payload.index],
					 ...action.payload.newGame
					};
				const updatedGames = [...state.games];
				updatedGames[action.payload.index] = updatedGame;
				 return {
					 ...state,
					 games: updatedGames
				 };
				 case GamesActions.DELETE_GAME:
					 return {
						 ...state,
						 games: state.games.filter((game, index) => {
							 return index !== action.payload;
						 })
					 }; 
		 default:
			 return state;
   }
}