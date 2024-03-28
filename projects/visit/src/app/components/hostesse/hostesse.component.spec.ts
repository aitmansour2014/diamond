import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostesseComponent } from './hostesse.component';

describe('HostesseComponent', () => {
  let component: HostesseComponent;
  let fixture: ComponentFixture<HostesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostesseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
