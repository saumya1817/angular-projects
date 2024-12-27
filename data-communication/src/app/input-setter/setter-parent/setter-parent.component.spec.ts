import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetterParentComponent } from './setter-parent.component';

describe('SetterParentComponent', () => {
  let component: SetterParentComponent;
  let fixture: ComponentFixture<SetterParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetterParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
