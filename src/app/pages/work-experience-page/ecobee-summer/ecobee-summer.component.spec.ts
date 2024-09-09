import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcobeeSummerComponent } from './ecobee-summer.component';

describe('EcobeeSummerComponent', () => {
  let component: EcobeeSummerComponent;
  let fixture: ComponentFixture<EcobeeSummerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcobeeSummerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcobeeSummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
