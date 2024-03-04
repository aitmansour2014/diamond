import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeHostessComponent } from './become-hostess.component';

describe('BecomeHostessComponent', () => {
  let component: BecomeHostessComponent;
  let fixture: ComponentFixture<BecomeHostessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeHostessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BecomeHostessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
