import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonModulContainerComponent } from './lesson-modul-container.component';

describe('LessonModulContainerComponent', () => {
  let component: LessonModulContainerComponent;
  let fixture: ComponentFixture<LessonModulContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonModulContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonModulContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
