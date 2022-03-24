import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilespageComponent } from './profilespage.component';

describe('ProfilespageComponent', () => {
  let component: ProfilespageComponent;
  let fixture: ComponentFixture<ProfilespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
