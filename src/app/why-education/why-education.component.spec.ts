import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyEducationComponent } from './why-education.component';

describe('WhyEducationComponent', () => {
  let component: WhyEducationComponent;
  let fixture: ComponentFixture<WhyEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
