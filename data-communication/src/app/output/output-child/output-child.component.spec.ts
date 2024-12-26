import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputChildComponent } from './output-child.component';

describe('OutputChildComponent', () => {
  let component: OutputChildComponent;
  let fixture: ComponentFixture<OutputChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
