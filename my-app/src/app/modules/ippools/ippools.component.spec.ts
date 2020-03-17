import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IppoolsComponent } from './ippools.component';

describe('IppoolsComponent', () => {
  let component: IppoolsComponent;
  let fixture: ComponentFixture<IppoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IppoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IppoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
