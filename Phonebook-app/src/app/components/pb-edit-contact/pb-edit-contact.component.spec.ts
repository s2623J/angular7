import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbEditContactComponent } from './pb-edit-contact.component';

describe('PbEditContactComponent', () => {
  let component: PbEditContactComponent;
  let fixture: ComponentFixture<PbEditContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbEditContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbEditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
