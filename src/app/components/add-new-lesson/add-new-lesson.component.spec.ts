import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLessonComponent } from './add-new-lesson.component';

describe('AddNewLessonComponent', () => {
  let component: AddNewLessonComponent;
  let fixture: ComponentFixture<AddNewLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewLessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
