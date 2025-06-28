import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeUtilComponent } from './theme-util.component';

describe('ThemeUtilComponent', () => {
    let component: ThemeUtilComponent;
    let fixture: ComponentFixture<ThemeUtilComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ThemeUtilComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ThemeUtilComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
