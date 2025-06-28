import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonDataAccessComponent } from './common-data-access.component';

describe('CommonDataAccessComponent', () => {
    let component: CommonDataAccessComponent;
    let fixture: ComponentFixture<CommonDataAccessComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonDataAccessComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CommonDataAccessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
