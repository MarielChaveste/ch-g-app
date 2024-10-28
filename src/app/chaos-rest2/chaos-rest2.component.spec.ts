import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaosRest2Component } from './chaos-rest2.component';

describe('ChaosRest2Component', () => {
  let component: ChaosRest2Component;
  let fixture: ComponentFixture<ChaosRest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaosRest2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaosRest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
