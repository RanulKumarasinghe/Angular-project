import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { map } from 'rxjs/operators';
import * as AuthActions from '../auth/store/auth.actions';
import * as GamesActions from '../videogames/store/game.actions';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuth = false;
  private userSub: Subscription;


  constructor(
    private store: Store<fromApp.AppState>) {

  }

  ngOnInit(){
    this.userSub = this.store.select('auth')
    .pipe(map(authState =>authState.user))
    .subscribe(user => {
      this.isAuth = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  onSaveData() {
    //this.dataStorageSerice.storeGames();
    this.store.dispatch(new GamesActions.StoreGames());
  }


  onFetchData() {
    //this.dataStorageSerice.fetchGames().subscribe();
    this.store.dispatch(new GamesActions.FetchGame());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

}
