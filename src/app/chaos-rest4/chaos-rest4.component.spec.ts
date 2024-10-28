import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaosRest4Component } from './chaos-rest4.component';

describe('ChaosRest4Component', () => {
  let component: ChaosRest4Component;
  let fixture: ComponentFixture<ChaosRest4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaosRest4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaosRest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
