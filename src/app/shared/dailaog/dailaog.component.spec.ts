import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailaogComponent } from './dailaog.component';

describe('DailaogComponent', () => {
  let component: DailaogComponent;
  let fixture: ComponentFixture<DailaogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailaogComponent]
    });
    fixture = TestBed.createComponent(DailaogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
