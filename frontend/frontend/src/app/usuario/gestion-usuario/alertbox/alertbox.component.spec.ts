import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertboxComponent } from './alertbox.component';

describe('AlertboxComponent', () => {
  let component: AlertboxComponent;
  let fixture: ComponentFixture<AlertboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});