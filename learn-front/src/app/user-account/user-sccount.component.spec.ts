import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSccountComponent } from './user-sccount.component';

describe('UserSccountComponent', () => {
  let component: UserSccountComponent;
  let fixture: ComponentFixture<UserSccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
