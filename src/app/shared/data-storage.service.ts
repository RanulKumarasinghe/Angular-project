// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { map, tap, take, exhaustMap } from 'rxjs/operators';

// import { GameService } from '../videogames/game.service';
// import { Videogame } from '../videogames/videogame.model';
// import { Store } from '@ngrx/store';
// import * as fromApp from '../store/app.reducer';
// import * as GamesActions from '../videogames/store/game.actions';

// @Injectable({providedIn: 'root'})

// export class DataStorageService {
//    constructor(private http: HttpClient,
//     private gameService: GameService,
//     private store: Store<fromApp.AppState>) {}

//    storeGames() {
//      const games = this.gameService.getVideogames();
//      this.http.put('https://my-videogame-project.firebaseio.com/games.json',
//      games).subscribe(
//        response => {
//          console.log(response);
//        });
//    }

//    fetchGames() {
//       return this.http.get<Videogame[]>(
//         'https://my-videogame-project.firebaseio.com/games.json',

//       ).pipe(
//       map(games => {
//       return games.map( game => {
//         return {...game, features: game.features ?
//        game.features: []};
//       });
//     }),
//     tap(games => {
//      //this.gameService.setGames(games);
//      this.store.dispatch(new GamesActions.SetGames(games));
//     })
//     )



//    }
// }
