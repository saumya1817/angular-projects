import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputParentComponent } from './output-parent.component';

describe('OutputParentComponent', () => {
  let component: OutputParentComponent;
  let fixture: ComponentFixture<OutputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
