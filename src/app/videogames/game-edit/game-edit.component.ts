import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';
import * as GamesActions from '../store/game.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  gameForm: FormGroup;
  
  private storeSub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id =+params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  getControls() {
    return (<FormArray>this.gameForm.get('features')).controls;
  }

  onSubmit(){

    if (this.editMode) {
      //this.gameService.updateVideoGame(this.id, this.gameForm.value)
      this.store.dispatch(new GamesActions.UpdateGame({index: this.id, newGame: this.gameForm.value}))
    } else {
      //this.gameService.addVideoGame(this.gameForm.value);
      this.store.dispatch(new GamesActions.AddGame(this.gameForm.value));
    }
    this.onCancel();
  }

  onAddFeature() {
   (<FormArray>this.gameForm.get('features')).push(
     new FormGroup({
      'name': new FormControl(null, Validators.required),
      'imp': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[1-9]*$/)
      ])
     })
   )
  }

  onDeleteFeature(index: number){
    (<FormArray>this.gameForm.get('features')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  private initForm(){
    let gameName ='';
    let gameImagePath = '';
    let gameDescription = '';
    let gameFeatures = new FormArray([]);


    if (this.editMode) {
      //const game = this.gameService.getVideoGame(this.id);
      this.storeSub = this.store.select('games').pipe(map(gameState => {
        return gameState.games.find((game, index) => {
          return index === this.id;
        })
      })).subscribe(game => {
        gameName = game.name;
    gameImagePath = game.imagePath;
    gameDescription = game.description;
    if (game['features']){
      for (let feature of game.features){
        gameFeatures.push(
          new FormGroup({
            'name': new FormControl(feature.name, Validators.required),
            'imp': new FormControl(feature.imp, [
              Validators.required,
              Validators.pattern(/^[1-9]+[1-9]*$/)
            ])
          })
        );
      }
    }
      })    
      
    }



    this.gameForm = new FormGroup({
      'name': new FormControl(gameName, Validators.required),
      'imagePath': new FormControl(gameImagePath, Validators.required),
      'description': new FormControl(gameDescription, Validators.required),
      'features': gameFeatures
    });
  }

}
