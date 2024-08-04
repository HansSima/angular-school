import { Component } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-firebase-test-console',
  templateUrl: './firebase-test-console.component.html',
  styleUrl: './firebase-test-console.component.scss',
})
export class FirebaseTestConsoleComponent {
  activeCollection: string = '';
  collectionNames: { label: string; value: string }[] = [];

  formTestGroup!: FormGroup;

  formData: string = '';
  formDocumentId: string = '';
  formCollectionId: string = '';

  responseText: string = 'Create request to generate response';

  constructor(private firebaseServise: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseServise.getRootCollections().subscribe((names) => {
      this.collectionNames = names.map((name) => ({
        label: name,
        value: name,
      }));
    });

    this.formTestGroup = new FormGroup({
      text: new FormControl(),
      documentIdInput: new FormControl<string | null>(null),
      collectionIdInput: new FormControl<string | null>(null),
      fieldIdInput: new FormControl<string | null>(null),
    });

    this.formTestGroup.get('text')?.valueChanges.subscribe((value) => {
      console.log(value);
      this.formData = value;
    });

    this.formTestGroup
      .get('documentIdInput')
      ?.valueChanges.subscribe((value) => {
        this.formDocumentId = value;
      });

    this.formTestGroup
      .get('collectionIdInput')
      ?.valueChanges.subscribe((value) => {
        this.formCollectionId = value;
      });

    this.formTestGroup.get('fieldIdInput')?.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.firebaseServise.getAll('html').subscribe((data) => {
      data.map((e) => {
        console.log(e.payload.doc.id);
      });
    });
  }

  changeActiveCollection(event: any) {
    this.firebaseServise.setActiveCollection(event.value);
    this.activeCollection = event.value;
  }

  getData() {
    this.firebaseServise.getLessons().subscribe((data) => {
      console.log(data);
      this.responseText = data[1].anotherField;
    });
  }

  setData() {
    this.firebaseServise.createNewDocument(
      { newfield: this.formData, anotherField: this.formData },
      this.formDocumentId
    );
  }

  setNewCollection() {
    this.firebaseServise.createNewCollection(this.formCollectionId);
    this.firebaseServise.setActiveCollection(this.formCollectionId);
  }

  updateData() {
    this.firebaseServise.update(
      { newfield: this.formData },
      this.formDocumentId
    );
  }

  deleteData() {
    this.firebaseServise.delete(this.formDocumentId);
  }
}
