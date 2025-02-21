import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ng-arch',
  imports: [CommonModule],
  templateUrl: './ng-arch.component.html',
  styleUrl: './ng-arch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgArchComponent {}
