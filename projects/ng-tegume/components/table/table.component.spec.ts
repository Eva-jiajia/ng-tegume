import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtTableComponent } from './table.component';

describe('TableComponent', () => {
  let component: NtTableComponent;
  let fixture: ComponentFixture<NtTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtTableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
