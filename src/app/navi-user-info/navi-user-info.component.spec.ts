import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviUserInfoComponent } from './navi-user-info.component';

describe('NaviUserInfoComponent', () => {
  let component: NaviUserInfoComponent;
  let fixture: ComponentFixture<NaviUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviUserInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
