import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeowizardComponent } from './geowizard.component';

describe('GeowizardComponent', () => {
  let component: GeowizardComponent;
  let fixture: ComponentFixture<GeowizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeowizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeowizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
