import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskNavBarComponent } from './desk-nav-bar.component';

describe('DeskNavBarComponent', () => {
  let component: DeskNavBarComponent;
  let fixture: ComponentFixture<DeskNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeskNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeskNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
