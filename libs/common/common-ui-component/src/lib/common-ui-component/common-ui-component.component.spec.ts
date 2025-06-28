import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonUiComponentComponent } from './common-ui-component.component';

describe('CommonUiComponentComponent', () => {
    let component: CommonUiComponentComponent;
    let fixture: ComponentFixture<CommonUiComponentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonUiComponentComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CommonUiComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
