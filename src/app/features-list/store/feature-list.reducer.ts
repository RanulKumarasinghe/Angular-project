import { Action } from '@ngrx/store';

import { Feature } from '../../shared/feature.model';
import * as FeatureListActions from './feature-list.actions';

export interface State {
	features: Feature[];
	editedFeature: Feature;
	editedFeatureIndex: number;
}


const initialState = {
	features: [
		new Feature("Racing game", 5),
		new Feature("Shooting game", 7),
	  ],
	  editedFeature: null,
	  editedFeatureIndex: -1
};

export function featureListReducer(
	state: State = initialState, 
	action: FeatureListActions.FeatureListActions) {
   switch (action.type) {
	   case FeatureListActions.ADD_FEATURE:
		   return {
			   ...state,
			   features: [...state.features, action.payload]
		   };
		   case FeatureListActions.ADD_FEATURES:
			   return {
				   ...state,
				   features: [...state.features, ...action.payload]
			   };
			  case FeatureListActions.UPDATE_FEATURE:
				const feature = state.features[state.editedFeatureIndex];
			    const updatedFeature = {
					...feature,
					...action.payload
				};

				const updatedFeatures = [...state.features];
                updatedFeatures[state.editedFeatureIndex] = updatedFeature;

			    return {
				   ...state,
				   features: updatedFeatures,
				   editedFeatureIndex: -1,
				   editedFeature: null
				};
				 
			  case FeatureListActions.DELETE_FEATURE:  
			  return{
					  ...state,
					  features: state.features.filter((feature, featureIndex) => {
						  return featureIndex !== state.editedFeatureIndex;
					  })
				  };  
			  case FeatureListActions.START_EDIT:
				  return {
					  ...state,
					  editedFeatureIndex: action.payload,
					  editedFeature: {...state.features[action.payload]}
				  };
			  case FeatureListActions.STOP_EDIT:
				  return {
					  ...state,
					  editedFeature: null,
					  editedFeatureIndex: -1
				  };	   	  
		   default:
			   return state;
   }
}