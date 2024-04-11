import { Component } from '@angular/core';
import { CoreModule } from '@c8y/ngx-components';
import { MapModule } from '@c8y/ngx-components/map';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CoreModule, MapModule],
  template: `
    <c8y-title>Beaches near you</c8y-title>
    <div style="height: 100vh; width: 100%;">
      <c8y-map
        [config]="{ center: [4.201523, 73.507263], zoomLevel: 13 }"
        [assets]="markers"
      >
        <div *c8yMapPopup="let context">
          {{ context.name }}
        </div>
      </c8y-map>
    </div>
  `,
})
export class MapComponent {
  markers: any = [
    {
      name: 'The Hotel',
      c8y_Position: {
        lat: 4.176356,
        lng: 73.513619,
      },
      icon: {
        name: 'hotel',
      },
    },
    {
      name: 'Sunsite beach',
      c8y_Position: {
        lat: 4.182862,
        lng: 73.456074,
      },
      icon: {
        name: 'sun',
      },
    },
    {
      name: 'Akolama beach',
      c8y_Position: {
        lat: 4.212651,
        lng: 73.484916,
      },
      icon: {
        name: 'sun',
      },
    },
    {
      name: 'City beach',
      c8y_Position: {
        lat: 4.217787,
        lng: 73.546411,
      },
      icon: {
        name: 'sun',
      },
    },
  ];
}
