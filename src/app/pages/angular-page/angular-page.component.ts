import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-angular-page',
  templateUrl: './angular-page.component.html',
  styleUrls: ['./angular-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularPageComponent {}
