import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription, Observable } from 'rxjs';
import { Feature } from '../shared/feature.model';
//import { FeatureListService } from './feature-list.service';
import * as FeatureListActions from './store/feature-list.actions';
import * as fromApp from '../store/app.reducer';



@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.css']
})
export class FeaturesListComponent implements OnInit, OnDestroy {
  features: Observable<{features: Feature[]}> ;
  private igChangeSub: Subscription;

  constructor(
    //private featureService: FeatureListService
    private store: Store<fromApp.AppState>
    ) {
    
    }

  ngOnInit() {
    this.features = this.store.select('featureList');
    // this.features = this.featureService.getFeature();

    //  this.igChangeSub = this.featureService.featureChanged.subscribe(
    //   (features: Feature[]) => {
    //     this.features = features;
    //   }
    // );

  }

  onEditFeature(index: number){
    //this.featureService.startedEditing.next(index);
    this.store.dispatch(new FeatureListActions.StartEdit(index));
  }

  ngOnDestroy(): void {
    // this.igChangeSub.unsubscribe();
  }

}
