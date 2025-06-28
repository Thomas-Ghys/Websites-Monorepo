import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-theme-data-access',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './theme-data-access.component.html',
    styleUrl: './theme-data-access.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeDataAccessComponent {}
