import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSecondComponent } from './comp-second.component';

describe('CompSecondComponent', () => {
  let component: CompSecondComponent;
  let fixture: ComponentFixture<CompSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
