import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviLoginComponent } from './navi-login.component';

describe('NaviLoginComponent', () => {
  let component: NaviLoginComponent;
  let fixture: ComponentFixture<NaviLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
