import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbHeaderComponent } from './pb-header.component';

describe('PbHeaderComponent', () => {
  let component: PbHeaderComponent;
  let fixture: ComponentFixture<PbHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
