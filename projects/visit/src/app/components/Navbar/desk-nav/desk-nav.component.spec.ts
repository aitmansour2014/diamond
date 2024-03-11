import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskNavComponent } from './desk-nav.component';

describe('DeskNavComponent', () => {
  let component: DeskNavComponent;
  let fixture: ComponentFixture<DeskNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeskNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeskNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
