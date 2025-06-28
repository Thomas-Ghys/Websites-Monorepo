import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-theme-ui-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './theme-ui-component.component.html',
    styleUrl: './theme-ui-component.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeUiComponentComponent {}
