import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaosUnrestComponent } from './chaos-unrest.component';

describe('ChaosUnrestComponent', () => {
  let component: ChaosUnrestComponent;
  let fixture: ComponentFixture<ChaosUnrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaosUnrestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaosUnrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
