import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclestopsComponent } from './vehiclestops.component';

describe('VehiclestopsComponent', () => {
  let component: VehiclestopsComponent;
  let fixture: ComponentFixture<VehiclestopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclestopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiclestopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
