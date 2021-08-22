import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFileComponent } from './popup-file.component';

describe('PopupFileComponent', () => {
  let component: PopupFileComponent;
  let fixture: ComponentFixture<PopupFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
