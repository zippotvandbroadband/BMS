import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceplansComponent } from './serviceplans.component';

describe('ServiceplansComponent', () => {
  let component: ServiceplansComponent;
  let fixture: ComponentFixture<ServiceplansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceplansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
