import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbSidebarComponent } from './pb-sidebar.component';

describe('PbSidebarComponent', () => {
  let component: PbSidebarComponent;
  let fixture: ComponentFixture<PbSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
