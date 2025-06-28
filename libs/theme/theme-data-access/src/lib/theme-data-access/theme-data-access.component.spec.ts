import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeDataAccessComponent } from './theme-data-access.component';

describe('ThemeDataAccessComponent', () => {
    let component: ThemeDataAccessComponent;
    let fixture: ComponentFixture<ThemeDataAccessComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ThemeDataAccessComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ThemeDataAccessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
