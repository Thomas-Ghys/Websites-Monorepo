import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonSmartComponentComponent } from './common-smart-component.component';

describe('CommonSmartComponentComponent', () => {
    let component: CommonSmartComponentComponent;
    let fixture: ComponentFixture<CommonSmartComponentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonSmartComponentComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CommonSmartComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
