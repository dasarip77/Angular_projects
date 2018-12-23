import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbootComponent } from './testboot.component';

describe('TestbootComponent', () => {
  let component: TestbootComponent;
  let fixture: ComponentFixture<TestbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
