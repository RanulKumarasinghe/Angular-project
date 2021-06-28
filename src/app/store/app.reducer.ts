import { ActionReducerMap } from '@ngrx/store';


import * as fromFeatureList from '../features-list/store/feature-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromGames from '../videogames/store/game.reducer';


export interface AppState {
	featureList: fromFeatureList.State;
	auth: fromAuth.State;
	games: fromGames.State;
}

export const appReducer: ActionReducerMap<AppState> = {
	featureList: fromFeatureList.featureListReducer,
	auth: fromAuth.authReducer,
	games: fromGames.gameReducer
};