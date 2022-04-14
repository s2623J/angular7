import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbContactListComponent } from './pb-contact-list.component';

describe('PbContactListComponent', () => {
  let component: PbContactListComponent;
  let fixture: ComponentFixture<PbContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbContactListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
