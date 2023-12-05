import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAdminNavbarComponent } from './sup-admin-navbar.component';

describe('SupAdminNavbarComponent', () => {
  let component: SupAdminNavbarComponent;
  let fixture: ComponentFixture<SupAdminNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupAdminNavbarComponent]
    });
    fixture = TestBed.createComponent(SupAdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
