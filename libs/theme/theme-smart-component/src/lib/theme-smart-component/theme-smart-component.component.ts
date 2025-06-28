import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-theme-smart-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './theme-smart-component.component.html',
    styleUrl: './theme-smart-component.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSmartComponentComponent {}
