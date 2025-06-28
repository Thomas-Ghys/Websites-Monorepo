import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-common-smart-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './common-smart-component.component.html',
    styleUrl: './common-smart-component.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonSmartComponentComponent {}
