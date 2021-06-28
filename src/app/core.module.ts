import { NgModule } from '@angular/core';
//import { FeatureListService } from './features-list/feature-list.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingService } from './logging.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },

  ]
})
export class CoreModule {}
