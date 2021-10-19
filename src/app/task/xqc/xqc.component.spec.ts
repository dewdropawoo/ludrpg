import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XqcComponent } from './xqc.component';

describe('XqcComponent', () => {
  let component: XqcComponent;
  let fixture: ComponentFixture<XqcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XqcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XqcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
