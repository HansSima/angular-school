import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonModulPageComponent } from './lesson-modul-page.component';

describe('LessonModulPageComponent', () => {
  let component: LessonModulPageComponent;
  let fixture: ComponentFixture<LessonModulPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonModulPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonModulPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
