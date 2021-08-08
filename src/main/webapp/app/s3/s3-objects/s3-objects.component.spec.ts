import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3ObjectsComponent } from './s3-objects.component';

describe('S3ObjectsComponent', () => {
  let component: S3ObjectsComponent;
  let fixture: ComponentFixture<S3ObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3ObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S3ObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
