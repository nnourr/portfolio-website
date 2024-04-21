import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjectsPageComponent } from './personal-projects-page.component';

describe('PersonalProjectsPageComponent', () => {
  let component: PersonalProjectsPageComponent;
  let fixture: ComponentFixture<PersonalProjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalProjectsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
