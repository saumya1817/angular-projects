import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetterChildComponent } from './setter-child.component';

describe('SetterChildComponent', () => {
  let component: SetterChildComponent;
  let fixture: ComponentFixture<SetterChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetterChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
