import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@c8y/ngx-components';
import { MapModule, PositionManagedObject } from '@c8y/ngx-components/map';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CoreModule, MapModule],
  template: `
    <c8y-title>Pubs near you</c8y-title>
    <div style="height: 100vh; width: 100%;">
      <c8y-map
        [config]="{ center: ['53.330545', '-6.248782'], zoomLevel: 18 }"
        [assets]="markers"
      >
      <div *c8yMapPopup="let context">
        {{ context.name }}
      </div>
    </c8y-map>
    </div>
  `
})
export class MapComponent {
  markers: any = [
    {
      name: 'The Hotel',
      c8y_Position: {
        lat: 53.330545,
        lng: -6.248782,
      },
      icon: {
        name: 'hotel',
      },
    },
    {
      name: 'M O’Briens',
      c8y_Position: {
        lat: 53.331250,
        lng: -6.251720,
      },
      icon: {
        name: 'beer',
      },
    },
    {
      name: 'The Waterloo Bar',
      c8y_Position: {
        lat: 53.333531,
        lng: -6.243754,
      },
      icon: {
        name: 'beer',
      },
    },
    {
      name: 'B Bar',
      c8y_Position: {
        lat: 53.330340,
        lng: -6.249426,
      },
      icon: {
        name: 'beer',
      },
    }
  ];
}
