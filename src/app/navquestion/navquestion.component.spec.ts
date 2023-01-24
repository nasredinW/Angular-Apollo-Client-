import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavquestionComponent } from './navquestion.component';

describe('NavquestionComponent', () => {
  let component: NavquestionComponent;
  let fixture: ComponentFixture<NavquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavquestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
