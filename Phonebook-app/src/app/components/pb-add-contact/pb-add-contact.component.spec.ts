import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbAddContactComponent } from './pb-add-contact.component';

describe('PbAddContactComponent', () => {
  let component: PbAddContactComponent;
  let fixture: ComponentFixture<PbAddContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbAddContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbAddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
