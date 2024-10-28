import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaosRest3Component } from './chaos-rest3.component';

describe('ChaosRest3Component', () => {
  let component: ChaosRest3Component;
  let fixture: ComponentFixture<ChaosRest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaosRest3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaosRest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
