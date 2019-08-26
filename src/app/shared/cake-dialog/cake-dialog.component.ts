import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICake } from '../../core/api/cakes/models/cake.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cake-dialog',
  templateUrl: './cake-dialog.component.html',
  styleUrls: ['./cake-dialog.component.scss']
})
export class CakeDialogComponent implements OnInit {
  form: FormGroup;
  blob: Blob;
  image: SafeUrl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICake,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CakeDialogComponent>,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document,
  ) {
  }

  ngOnInit() {
    if (!this.data) {
      this.data = {
        cakePrice: null,
        description: null,
        numberOfPortion: null,
        portionPrice: null,
        name: '',
        image: null,
      };
    }
    this.form = this.formBuilder.group({
      name: [this.data.name, Validators.required],
      numberOfPortion: [this.data.numberOfPortion, Validators.required],
      cakePrice: [this.data.cakePrice, Validators.required],
      description: [this.data.description, Validators.required],
      portionPrice: [this.data.portionPrice, Validators.required],
    });


  }

  editImage() {
    const file = this.document.getElementById('file');
    file.click();
    file.addEventListener('change', (event: any) => {
      const inputFile = event.target.files[0];
      this.blob = new Blob([inputFile], {type: inputFile.type});
      this.image = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[0]));
    });
  }

  save() {
    if (!this.form.invalid) {
      const values: ICake = this.form.value;
      console.log('test', values);
      values.id = new Date().getTime();
      values.image = this.blob;
      this.dialogRef.close(values);
    }

  }
}
