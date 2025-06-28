import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeModelComponent } from './theme-model.component';

describe('ThemeModelComponent', () => {
    let component: ThemeModelComponent;
    let fixture: ComponentFixture<ThemeModelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ThemeModelComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ThemeModelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
