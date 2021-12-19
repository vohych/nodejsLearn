import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongSearchComponent } from './strong-search.component';

describe('StrongSearchComponent', () => {
  let component: StrongSearchComponent;
  let fixture: ComponentFixture<StrongSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrongSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrongSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
