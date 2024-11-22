import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFirstComponent } from './comp-first.component';

describe('CompFirstComponent', () => {
  let component: CompFirstComponent;
  let fixture: ComponentFixture<CompFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
