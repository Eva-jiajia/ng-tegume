import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtInputComponent } from './input.component';

describe('TgInputComponent', () => {
  let component: NtInputComponent;
  let fixture: ComponentFixture<NtInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NtInputComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NtInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
