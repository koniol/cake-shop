import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICake } from '../../core/api/cakes/models/cake.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { CakesService } from '../../core/api/cakes/cakes.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-cake-dialog',
  templateUrl: './cake-dialog.component.html',
  styleUrls: ['./cake-dialog.component.scss']
})
export class CakeDialogComponent implements OnInit {
  form: FormGroup;
  image: SafeUrl;
  formSubmitted = false;
  fileData: File;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICake,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CakeDialogComponent>,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document,
    private storage: AngularFireStorage,
    private cakeService: CakesService,
  ) {
  }

  ngOnInit() {
    if (!this.data) {
      this.data = {} as ICake;
    }
    this.image = this.data.image;
    this.form = this.formBuilder.group({
      name: [this.data.name, Validators.required],
      numberOfPortion: [this.data.numberOfPortion, Validators.required],
      cakePrice: [this.data.cakePrice, Validators.required],
      description: [this.data.description],
      portionPrice: [{value: this.data.portionPrice, disabled: true}, Validators.required],
    });
  }

  f(name: string) {
    return this.form.get(name);
  }

  editImage() {
    const file = this.document.getElementById('file');
    file.click();
    file.addEventListener('change', (event: any) => {
      this.fileData = event.target.files[0];
      this.image = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.fileData));
    });
  }

  save() {
    this.formSubmitted = true;
    if (this.form.valid) {
      const filePath = '/cakes/' + Math.random().toString(36).substring(2);
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.fileData);
      this.addCake(task, fileRef, filePath);
      this.dialogRef.close();
    }
  }

  addCake(task: AngularFireUploadTask, fileRef: AngularFireStorageReference, imageId: string) {
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          const values: ICake = this.form.value;
          values.image = url;
          values.imageId = imageId;
          this.cakeService.addCake(values);
        });
      })
    ).subscribe();
  }


  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
  }

  getPortionPrice() {
    const price = this.f('cakePrice').value / this.f('numberOfPortion').value;
    return !isNaN(price) && isFinite(price) ? price + ' PLN' : '0 PLN';
  }

  checkIsValid(field) {
    return this.formSubmitted && this.f(field).errors && this.f(field).errors.required;
  }
}
