import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-common-common-util',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-util.component.html',
  styleUrl: './common-util.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUtilComponent {}
