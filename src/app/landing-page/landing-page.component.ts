import { Component } from '@angular/core';
import { PrimengModule} from '~/app/primeng/primeng.module';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    PrimengModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
