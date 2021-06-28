import { Action } from '@ngrx/store';

import { Feature } from 'src/app/shared/feature.model';

export const ADD_FEATURE = '[Shopping List] Add feature';
export const ADD_FEATURES = '[Shopping List] Add features';
export const UPDATE_FEATURE = '[Shopping List] Update feature';
export const DELETE_FEATURE = '[Shopping List] Delete feature';
export const START_EDIT = '[Shopping List] Start Edit';
export const STOP_EDIT = '[Shopping List] Stop Edit';


export class AddFeature implements Action {
 readonly type = ADD_FEATURE;
 

 constructor(public payload: Feature) {}
}

export class AddFeatures implements Action {
	readonly type = ADD_FEATURES;
	constructor(public payload: Feature[]) {}
}

export class UpdateFeature implements Action {
	readonly type = UPDATE_FEATURE;

	constructor(public payload: Feature) {}
}

export class DeleteFeature implements Action {
	readonly type = DELETE_FEATURE;

}

export class StartEdit implements Action {
	readonly type = START_EDIT; 
	
	constructor(public payload: number) {}


}

export class StopEdit implements Action {
	readonly type = STOP_EDIT; 

}

export type FeatureListActions = 
AddFeature | 
AddFeatures | 
UpdateFeature | 
DeleteFeature|
StartEdit|
StopEdit;