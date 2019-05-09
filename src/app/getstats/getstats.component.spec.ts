import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstatsComponent } from './getstats.component';

describe('GetstatsComponent', () => {
  let component: GetstatsComponent;
  let fixture: ComponentFixture<GetstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
