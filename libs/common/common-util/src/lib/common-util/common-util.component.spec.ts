import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonUtilComponent } from './common-util.component';

describe('CommonUtilComponent', () => {
    let component: CommonUtilComponent;
    let fixture: ComponentFixture<CommonUtilComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonUtilComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CommonUtilComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
