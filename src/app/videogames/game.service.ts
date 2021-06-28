// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import { Store } from '@ngrx/store';


// import { Videogame } from './videogame.model';
// import { Feature } from '../shared/feature.model';
// //import { FeatureListService } from '../features-list/feature-list.service';
// import * as FeatureListActions from '../features-list/store/feature-list.actions';
// //import * as fromFeatureList from '../features-list/store/feature-list.reducer';
// import * as fromApp from '../store/app.reducer';


// @Injectable()
// export class GameService {

//   gamesChanged = new Subject<Videogame[]>();


//   // private videogames: Videogame[] = [
//   //  new Videogame('First game', 'First description',
//   //  'https://cdn.pocket-lint.com/r/s/970x/assets/images/145071-games-buyer-s-guide-best-upcoming-pc-games-to-look-forward-to-in-2018-and-beyond-image1-f5lhsvahbp.jpg?v1', [
//   //    new Feature('Battle Royale', 1)
//   //  ]),
//    // new Videogame('Second game', 'Second description',
//    // 'https://cdn.pocket-lint.com/r/s/970x/assets/images/145071-games-buyer-s-guide-best-upcoming-pc-games-to-look-forward-to-in-2018-and-beyond-image1-f5lhsvahbp.jpg?v1',
//    // [
//    //   new Feature('Battle Royale', 2)
//    // ])

//   // ];

//   private videogames: Videogame[] = [];

//   constructor(private store: Store<fromApp.AppState> 
//     ) 
//     {}

//   setGames(videogames: Videogame[]) {
//     this.videogames = videogames;
//     this.gamesChanged.next(this.videogames.slice());
//   }


//   getVideogames(){
//     return this.videogames.slice();
//   }

//   getVideoGame(index: number){
//     return this.videogames[index];
//   }

//   addFeatures(features: Feature[]){
//     //this.featureService.addFeatures(features);
//     this.store.dispatch(new FeatureListActions.AddFeatures(features))
//   }

//   addVideoGame(game: Videogame){
//      this.videogames.push(game);
//      this.gamesChanged.next(this.videogames.slice())
//   }

//   updateVideoGame(index: number, newGame: Videogame){
//      this.videogames[index] = newGame;
//      this.gamesChanged.next(this.videogames.slice())

//   }

//   deleteVideoGame(index: number){
//     this.videogames.splice(index, 1);
//     this.gamesChanged.next(this.videogames.slice());
//   }
// }
