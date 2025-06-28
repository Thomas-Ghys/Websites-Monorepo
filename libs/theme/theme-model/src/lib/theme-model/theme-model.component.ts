import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-theme-model',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './theme-model.component.html',
    styleUrl: './theme-model.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeModelComponent {}
