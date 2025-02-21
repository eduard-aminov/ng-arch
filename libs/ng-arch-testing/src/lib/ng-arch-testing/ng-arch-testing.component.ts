import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ng-arch-testing',
  imports: [CommonModule],
  templateUrl: './ng-arch-testing.component.html',
  styleUrl: './ng-arch-testing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgArchTestingComponent {}
