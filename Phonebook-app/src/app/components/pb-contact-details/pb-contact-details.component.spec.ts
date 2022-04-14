import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbContactDetailsComponent } from './pb-contact-details.component';

describe('PbContactDetailsComponent', () => {
  let component: PbContactDetailsComponent;
  let fixture: ComponentFixture<PbContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbContactDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
