import { NgModule } from '@angular/core';
import { FeaturesListComponent } from './features-list.component';
import { FeatureEditComponent } from './feature-edit/feature-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
   declarations: [FeaturesListComponent,
    FeatureEditComponent],
    imports: [
      FormsModule,
      RouterModule.forChild([
        { path: '', component: FeaturesListComponent},
      ]),
      SharedModule
    ],

})
export class FeatureListModule {}
