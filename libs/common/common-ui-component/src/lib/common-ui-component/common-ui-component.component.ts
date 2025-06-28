import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-common-ui-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './common-ui-component.component.html',
    styleUrl: './common-ui-component.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUiComponentComponent {}
