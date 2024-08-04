import { Component } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-add-new-lesson',
  templateUrl: './add-new-lesson.component.html',
  styleUrl: './add-new-lesson.component.scss',
})
export class AddNewLessonComponent {
  activeCollection: string = '';
  collectionNames: { label: string; value: string }[] = [];

  formAddNewLesson!: FormGroup;

  constructor(
    private firebaseServise: FirebaseService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.firebaseServise.getRootCollections().subscribe((names) => {
      this.collectionNames = names.map((name) => ({
        label: name,
        value: name,
      }));
    });

    this.formAddNewLesson = new FormGroup({
      category: new FormControl<string | null>(null, [Validators.required]),
      description: new FormControl<string | null>(null, [Validators.required]),
      id: new FormControl<string | null>(null, [Validators.required]),
      name: new FormControl<string | null>(null, [Validators.required]),
      image: new FormControl<string | null>(null),
    });
  }

  changeActiveCollection(event: any) {
    this.firebaseServise.setActiveCollection(event.value);
    this.activeCollection = event.value;
  }

  onUpload(event: any) {
    const filePath =
      this.activeCollection +
      '/' +
      this.formAddNewLesson.get('name')?.value.replace(/\s+/g, '');
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, event.files[0]);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            console.log(url);
            this.formAddNewLesson.patchValue({
              image: url,
            });
            if (this.formAddNewLesson.valid) {
              this.firebaseServise.addNewLesson(this.formAddNewLesson.value);
            }
          });
        })
      )
      .subscribe();
  }

  onAttachmentSelected(event: any) {}
}
