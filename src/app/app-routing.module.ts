import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/videogames', pathMatch: 'full' },
  { path: 'videogames', loadChildren: './videogames/videogames.module#VideogamesModule'},
  { path: 'features-list', loadChildren: './features-list/features-list.module#FeatureListModule'},
  { path: 'auth', loadChildren:'./auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
