import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Feature } from '../../shared/feature.model'
//import { FeatureListService } from '../feature-list.service';
import { Store } from '@ngrx/store';
import * as FeatureListActions from '../store/feature-list.actions';
//import * as fromFeatureList from '../store/feature-list.reducer';
import * as fromApp from '../../store/app.reducer';




@Component({
  selector: 'app-feature-edit',
  templateUrl: './feature-edit.component.html',
  styleUrls: ['./feature-edit.component.css']
})
export class FeatureEditComponent implements OnInit, OnDestroy {
@ViewChild('f', { static: false }) featureForm: NgForm;
subscription: Subscription;
editMode = false;
editedItem: Feature;

 constructor(//private featureService: FeatureListService,
  private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('featureList').subscribe(stateData => {
      if (stateData.editedFeatureIndex > -1) {
         this.editMode = true;
         this.editedItem = stateData.editedFeature;
         this.featureForm.setValue({
          name: this.editedItem.name,
          imp: this.editedItem.imp
        });
        } else {
        this.editMode = false;
      }
    });
    
  }

  onAddFeature(form: NgForm){
    const value = form.value;
    const newFeature = new Feature(value.name, value.imp);
    if(this.editMode){
      //this.featureService.updateFeature(this.editedItemIndex, newFeature);
      this.store.dispatch(new FeatureListActions.UpdateFeature(newFeature)
          );
    } else{
      // this.featureService.addFeature(newFeature);
      this.store.dispatch(new FeatureListActions.AddFeature(newFeature))
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.featureForm.reset();
    this.editMode = false;
    this.store.dispatch(new FeatureListActions.StopEdit())
  }

  onDelete(){
    //this.featureService.deleteFeature(this.editedItemIndex);
    this.store.dispatch(
      new FeatureListActions.DeleteFeature());
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.store.dispatch(new FeatureListActions.StopEdit())

  }


}
