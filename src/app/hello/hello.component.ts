import { Component } from '@angular/core';
import { CoreModule } from '@c8y/ngx-components';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CoreModule],
  template: `
    <c8y-title>
      Welcome
    </c8y-title>
    <img src="assets/iug2024.png">
  `,
  styles: [`
    img {
      width: 100%;
    }
  `
  ]
})
export class HelloComponent {

}
