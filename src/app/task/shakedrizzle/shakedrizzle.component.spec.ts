import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakedrizzleComponent } from './shakedrizzle.component';

describe('ShakedrizzleComponent', () => {
  let component: ShakedrizzleComponent;
  let fixture: ComponentFixture<ShakedrizzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakedrizzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakedrizzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
