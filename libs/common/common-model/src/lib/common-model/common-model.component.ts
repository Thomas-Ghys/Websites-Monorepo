import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-common-common-model',
  imports: [CommonModule],
  templateUrl: './common-model.component.html',
  styleUrl: './common-model.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonModelComponent {}
