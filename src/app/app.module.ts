import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CoreModule,
  BootstrapComponent,
  RouterModule,
  hookRoute,
  hookNavigator,
} from '@c8y/ngx-components';
import { HelloComponent } from './hello/hello.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    CoreModule.forRoot(),
  ],
  bootstrap: [BootstrapComponent],
  providers: [
    hookNavigator({
      path: '/',
      label: 'Welcome',
      icon: 'home',
      priority: 10
    }),
    hookRoute({
      path: '',
      component: HelloComponent
    }),
    hookNavigator({
      path: '/map',
      label: 'Beaches near you',
      icon: 'sun'
    }),
    hookRoute({
      path: 'map',
      component: MapComponent
    }),
  ]
})
export class AppModule {}
