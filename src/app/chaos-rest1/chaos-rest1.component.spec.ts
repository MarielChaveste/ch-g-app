import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaosRest1Component } from './chaos-rest1.component';

describe('ChaosRest1Component', () => {
  let component: ChaosRest1Component;
  let fixture: ComponentFixture<ChaosRest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaosRest1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaosRest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
