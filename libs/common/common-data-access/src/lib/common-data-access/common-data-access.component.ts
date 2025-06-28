import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-common-data-access',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './common-data-access.component.html',
    styleUrl: './common-data-access.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonDataAccessComponent {}
