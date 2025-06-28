import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeUiComponentComponent } from './theme-ui-component.component';

describe('ThemeUiComponentComponent', () => {
    let component: ThemeUiComponentComponent;
    let fixture: ComponentFixture<ThemeUiComponentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ThemeUiComponentComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ThemeUiComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
