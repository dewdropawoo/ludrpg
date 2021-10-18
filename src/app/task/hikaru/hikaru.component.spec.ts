import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikaruComponent } from './hikaru.component';

describe('HikaruComponent', () => {
  let component: HikaruComponent;
  let fixture: ComponentFixture<HikaruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikaruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
