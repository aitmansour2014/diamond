import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiNavBarComponent } from './mobi-nav-bar.component';

describe('MobiNavBarComponent', () => {
  let component: MobiNavBarComponent;
  let fixture: ComponentFixture<MobiNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobiNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobiNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
