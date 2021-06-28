// import { Feature } from '../shared/feature.model';
// import { Subject } from 'rxjs';


// export class FeatureListService{
//   featureChanged = new Subject<Feature[]>();
//   startedEditing = new Subject<number>();
//   private features: Feature[] = [
//     new Feature("Racing game", 5),
//     new Feature("Shooting game", 7),
//   ];

//   getFeature(){
//     return this.features.slice();
//   }

//   getFeatures(index: number){
//     return this.features[index];
//   }

//   addFeature(feature: Feature){
//     this.features.push(feature);
//     this.featureChanged.next(this.features.slice());
//   }

//   addFeatures(features: Feature[]){
//     this.features.push(...features);
//     this.featureChanged.next(this.features.slice());
//   }

//   updateFeature(index: number, newFeature: Feature){
//     this.features[index] = newFeature;
//     this.featureChanged.next(this.features.slice());
//   }

//   deleteFeature(index: number){
//     this.features.splice(index, 1);
//     this.featureChanged.next(this.features.slice());
//   }
// }
