import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestHttpComponent } from './rest-http.component';

describe('RestHttpComponent', () => {
  let component: RestHttpComponent;
  let fixture: ComponentFixture<RestHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
