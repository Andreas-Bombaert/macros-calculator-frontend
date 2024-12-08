import { Component } from '@angular/core';
import { PrimengModule} from '~/app/primeng/primeng.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PrimengModule,
  ],
  templateUrl: './login-component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
