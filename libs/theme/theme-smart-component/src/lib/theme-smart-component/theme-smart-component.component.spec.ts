import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeSmartComponentComponent } from './theme-smart-component.component';

describe('ThemeSmartComponentComponent', () => {
    let component: ThemeSmartComponentComponent;
    let fixture: ComponentFixture<ThemeSmartComponentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ThemeSmartComponentComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ThemeSmartComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
