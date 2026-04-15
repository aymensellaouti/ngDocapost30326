import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxJs } from './test-rx-js';

describe('TestRxJs', () => {
  let component: TestRxJs;
  let fixture: ComponentFixture<TestRxJs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRxJs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxJs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
