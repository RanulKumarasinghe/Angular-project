import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Videogame } from '../videogame.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.css']
})
export class VideogameListComponent implements OnInit,
OnDestroy {
  videogames: Videogame[];
  subscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>) {

  }

  ngOnInit() {
    this.subscription = this.store.select('games')
    .pipe(map(gamesState => gamesState.games))
    .subscribe(
      (videogames: Videogame[]) => {
        this.videogames = videogames;
      }
    )
  }

  onNewGame(){
    this.router.navigate(['new'],
    {relativeTo: this.route});

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
