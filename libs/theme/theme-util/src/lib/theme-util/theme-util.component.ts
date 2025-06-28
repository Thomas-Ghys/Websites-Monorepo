import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-theme-util',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './theme-util.component.html',
    styleUrl: './theme-util.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeUtilComponent {}
