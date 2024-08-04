import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseTestConsoleComponent } from './firebase-test-console.component';

describe('FirebaseTestConsoleComponent', () => {
  let component: FirebaseTestConsoleComponent;
  let fixture: ComponentFixture<FirebaseTestConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirebaseTestConsoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirebaseTestConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
